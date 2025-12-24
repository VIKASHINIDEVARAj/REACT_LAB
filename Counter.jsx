import React , {useState}from 'react'

function Counter() {
  const [count ,Setcount] =useState (0)

  const incre=()=>{
    Setcount(count + 1)
  }
  const decre=()=>{
     Setcount(count - 1)
  }
  const reset=()=>{
    Setcount(0)
  }

  return (
    <div style={{height:"200px",width:"400px",border:"1px solid",textAlign:"center"}}>
      <h1>Counter-app</h1>
      <div>{count}</div>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Counter

