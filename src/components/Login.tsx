import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

const Login = (prop: any) => {
  console.log("Login prop - 1: ", prop);
  const [data, setData] = useState<any>();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { name, info } = prop.data;

  const location = useLocation();
  const locValues = location.state;

  useEffect(() => {
    console.log("Login prop - 2: ", prop.data);
    console.info("State Location vlaues : ", locValues);
    setData(prop.data);
  });

  const onUserNameChange = (e:any) => {
    setUserName(e.target.value);
  }

  const onPasswordChange = (e:any) => {
    setPassword(e.target.value)
  }

  const onSubmit = () => {
    if(userName && password){
        data.onSuccess({page: "Login", status: "Success", message: "Login successfully by "+userName});
    } else {
        data.onError({page: "Login", status: "Error", message: "Error while login by "+userName});
    }
    
  }

  return (
    <>
      <h1>Login Page : {info.userId}</h1>
      <div> 
        <input type="text" placeholder="UserName" value={userName} onChange={onUserNameChange}></input> <br/>
        <input type="password" placeholder="Password" value={password} onChange={onPasswordChange}></input> <br/>
        <button type="button" onClick={onSubmit}>Login</button>
        <br></br>
      </div>
      <NavLink to="/">Go Back</NavLink>
    </>
  );
};

export default Login;
