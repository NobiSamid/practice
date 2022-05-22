import React from 'react'

const seasonConfig = {
  summer: {
    text: "lets's hit the beach!",
    weather: "hot summer"
  },
  winter: {
    text: "Burrrr! it is cold",
    weather: "thanda thanda cool cool"
  }
}

const getSeason = (lat, month) =>{
if(month > 2 && month < 9){
  return lat > 0 ? 'summer' : 'winter';
}else{
  return lat < 0 ? 'winter' : 'summer';
}
}

export default function SeasonDisplay(props) {

  const season = getSeason(props.lat, new Date().getMonth());
  const { text, weather } = seasonConfig[season];
  return (
    <div>{text} <br /> it's <br />  {weather} </div>
  );
}
