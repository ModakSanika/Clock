import { useState } from "react";

const App=()=>{
    let time=new Date().toLocaleTimeString()
    const [ctime,utime]=useState(time)

    const UpdateTime=()=>{
      let Newtime=new Date().toLocaleTimeString()
      utime(Newtime);
    }
    return(
        <>
        <section>
        <h1>{ctime}</h1>
        <button onClick={UpdateTime}>Get Time</button>
        </section>
        </> )}
export default App;


