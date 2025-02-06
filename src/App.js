import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight,setweight]= useState(0);
  const [height,setheight] = useState(0);
  const [bmi,setbmi]= useState('');
  const [message,setmessage]= useState("");

  let calcbmi = (e)=>{
    e.preventDefault();
    if(weight ===0 || height ===0){
      alert("please and your valid height and weight")
    }
    else{
      let bmi = (weight/(height*height)*703)
      setbmi(bmi.toFixed(1));

      if(bmi<25){
        setmessage("you are underweight");
      }
      else if(bmi>= 25 && bmi <30){
        setmessage("you are a healthy weight");
      }
      else{
        setmessage("you are overweight")
      }
    }
  }

  let reload = ()=>{
    window.location.reload()
  }
    return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculater</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight (ibs)</label>
            <input type='number' placeholder='Enter your weight ' value={weight} onChange={(e)=>setweight(e.target.value)}/>
          </div>
          <div>
            <label>Height (ibs)</label>
            <input type='number' placeholder='Enter your height ' value={height} onChange={(e)=>setheight(e.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

          <div className='center'>
            <h3>your BMI  is:{bmi}</h3>
            {message}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
