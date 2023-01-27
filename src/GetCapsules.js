import { useEffect } from 'react'
import createJWT from './JWT';
import { useDispatch } from 'react-redux';
import { setCapsules, setFetchError } from './redux/actions';

function GetCapsules(props) {
  const dispatch = useDispatch();

  //geting the capsules
  const getCapsulesData = async () => {
    try {
      const jwt = await createJWT();
      const API_ENDPOINt = "http://localhost:3300/spacex-capsules/rest/";

      const response = await fetch(API_ENDPOINt, {
        headers: {
          'Authorization': jwt
        }
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log("data", data);


      dispatch(setCapsules(data));

    } catch (err) {
      dispatch(setFetchError(err.message));
      //console.log("error", err.TypeError);
    }
  }

  useEffect(() => {
    getCapsulesData();
  });

}

export default GetCapsules