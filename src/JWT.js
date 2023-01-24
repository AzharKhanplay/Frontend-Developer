import * as jose from 'jose';
//const SECRET_KEY = process.env.SECRET_KEY;

  const SECRET_KEY = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
  );

  const createJWT = async () => {
    const claims = {
      sub: 'azharkhan',
      iat: Math.floor(new Date().getTime() / 1000)
    }
    //Encoding the claims
    const alg = 'HS256';
    const encodedJWT = await new jose.SignJWT(claims)
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setIssuer('http://localhost:3001')
      .setAudience('http://localhost:3001')
      .setExpirationTime(new Date().getTime() + 60 * 60)
      .sign(SECRET_KEY)
    return encodedJWT;
  }

  export default createJWT;