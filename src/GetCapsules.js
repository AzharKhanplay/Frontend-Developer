import React, { useEffect } from 'react'
import createJWT from './JWT';
import { useDispatch } from 'react-redux';
import { setCapsules } from './redux/actions';

function GetCapsules(props) {
  const dispatch = useDispatch();

  //geting the capsules
  const getCapsulesData = async () => {
    const jwt = await createJWT();
    const API_ENDPOINt = "https://reinventmedia.in/spx/";

    const response = await fetch(API_ENDPOINt, {
      headers: {
        'Authorization': jwt
      }
    });
    const data = await response.json();
    //console.log("data", data);
    dispatch(setCapsules(data));
  }
  
  useEffect(() => {
    getCapsulesData();
  });

  return (
    <></>
  )
}

export default GetCapsules