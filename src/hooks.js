import React, { useState,useEffect } from 'react'

function HooksCouter() {
 

    const [count, setCount]= useState({ name:"manoj", age:20})
    const [array,setArray] = useState([])
    const [data,fetchdata] = useState([])


   const handler=()=>{
    setCount({name:"basha"})
    }

    const handler1=()=>{
        setArray([...array,"manoj","basha"])
    }
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => fetchdata(json))
    },[])

    
    return (
        <div>
          <button onClick={handler}>hello {count.name}</button>

          <button onClick={handler1}>click</button>

          {array.map((val,key)=>(
              <h1 key={key}>{val}</h1>
          ))}

          {data.slice(0,3).map((val,key)=>(
              <h1 key={key}>{val.title}</h1>
          ))}
        </div>
    )
}

export default HooksCouter
