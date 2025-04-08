import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time,setTime]=useState(new Date())
  console.log('current time printed')

useEffect(()=>{
  console.log('interval has benn set up')
  const intervalId=setInterval(()=>{setTime(new Date())},1000)
  return ()=>{
    clearInterval(intervalId)
    console.log('canceled the interval')
  }
},[])
  return (
    <p>
      This is the current time:{time.toLocaleDateString()}
      {"   - " + "-"}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
