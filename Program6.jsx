import React , { useState } from 'react'

function Calculator() {
  const [num1,setNum1]=useState("");
  const [num2,setNum2]=useState("");
  const a=Number(num1);
  const b=Number(num2);
  return (
    <div >
      <h1 style={{ textDecoration: "underline" }}>CALCULATOR</h1>
      <input type="number" placeholder='First Value:'
      onChange={(e)=>setNum1(e.target.value)} />
       <input type="number" placeholder='Second Value:'
       onChange={(e)=>setNum2(e.target.value)}
        />
       <div 
       style={{height:"300px",
       width:"200px",
       border:"9px solid ",
       marginLeft:"260px",
       marginTop:"20px",
       backgroundColor:"lemonchiffon",
       textAlign:"left"}}>
     <h1>result:</h1>
      <p><strong>Addition:</strong>{a+b}</p>
      <p><strong>Subtrction:</strong>{a-b}</p>
      <p><strong>Multiplication:</strong>{a*b}</p>
      <p><strong>Division:</strong>{b==0?"cannot divide by zero":a/b}</p>
       </div>
    </div>
  );
}

export default Calculator;
