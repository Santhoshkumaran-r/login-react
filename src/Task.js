import { useState } from "react";
export default function Task() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handlename = (event) =>{
    setName(event.target.value)
  }
  const handlepwd = (event) =>{
    setPassword(event.target.value)
  }

  const handlebutton = ()=>{
    if(!name || !password){
        alert("please enter valid user creds")
    }else if(name === "Gangully"){
        alert("Welcome Gangully")
    }else if(name === "Sachin"){
        alert("Welcome Sachin")
    }else{q
        alert("you are not authorized person")
    }
  }


  return (
    <div className="container">
        <div className="sub-container">
        <h1>Login page</h1> <br />
      <label htmlFor="input">
        User Name: <br />
        <input type="text" onChange={handlename} />
        <br />
        Password: <br />
        <input type="password" onChange={handlepwd}/>
        <br />
        <button onClick={handlebutton}>Login</button>
      </label>

        </div>
      
    </div>
  );
}
