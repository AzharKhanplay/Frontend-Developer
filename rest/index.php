<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Max-Age: 3600");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Origin, X-Auth-Token");

// Handling CORS Preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('HTTP/1.1 200 OK');
    exit();
}

require (__DIR__ . '/vendor/autoload.php');
  use Firebase\JWT\JWT;
  use Firebase\JWT\Key;

// Verify JWT token
function verifyJWT($jwt) {
    // Get the secret key from a secure location, such as an environment variable
    $secretKey = 'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2';
    try {
        $decoded = JWT::decode($jwt, new Key($secretKey, 'HS256'));
        return $decoded;
    } catch (\Exception $e) {
        http_response_code(401);
        echo json_encode(array(
            "message" => "Access denied.",
            "error" => $e->getMessage()
        ));
        exit();
    }
}

// Get authorization header
$headers = getallheaders();
$jwt = "";
if (isset($headers["Authorization"])) {
    $jwt = $headers["Authorization"];
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Access denied."));
    exit();
}

// Validate JWT token
$decoded = verifyJWT($jwt);


// Make GET request to SpaceX API
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

//Posted data
$posted_data = json_decode(file_get_contents('php://input'), true);

$capsule_id = $posted_data["capsule_id"];
if($capsule_id){
    curl_setopt($ch, CURLOPT_URL, 'https://api.spacexdata.com/v4/capsules/'.$capsule_id);
}else{
 curl_setopt($ch, CURLOPT_URL, 'https://api.spacexdata.com/v4/capsules');
}
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$data = json_decode($response, true);

echo json_encode($data);

curl_close($ch);




