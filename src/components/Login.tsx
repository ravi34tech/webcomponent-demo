import { useEffect, useState, type ChangeEvent } from "react";
import { NavLink, useLocation } from "react-router";

const Login = (prop: any) => {
  console.log("Login prop - 1: ", prop);
  const [data, setData] = useState<any>();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { name, info, onConsentSuccess, onConsentError, onConsentEvent} = prop.data;

  const location = useLocation();
  const locValues = location.state;

  useEffect(() => {
    console.log("Login prop - 2: ", prop?.data);
    console.info("State Location vlaues : ", locValues);
    setData(prop?.data);
    const messageInfo = {
          details: {page: "Login Page", status: "Open", type:"Prop Event", message: "Open Login Page by "+userName},
          bubbles: true,
          composed: true,
      };
    onConsentEvent(messageInfo);
  });

  const onUserNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  const onPasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onSubmit = () => {
    if(userName && password){
      const messageInfo = {
          details: {page: "Login-1", status: "Success", type:"Prop Event", message: "Login successfully by "+userName},
          bubbles: true,
          composed: true,
      };
      onConsentSuccess(messageInfo);
      triggerConsentMgmtEvent("onConsentSuccess",{page: "Login-1", status: "Success", type:"Dispatch Event", message: "Login successfully by "+userName});
    } else {
      const msg = {page: "Login", status: "Error", type:"Dispatch Event", message: "Error while login by "+userName};
      triggerConsentMgmtEvent("onConsentError",  msg);
      const messageInfo = {
          details: { ...msg, type:"Prop Event"},
          bubbles: true,
          composed: true,
      };
      onConsentError(messageInfo)
    }
    
  }

   const triggerConsentMgmtEvent = (eventName, data) => {
    console.info("triggerConsentMgmtEvent triggered..: ",eventName);
      const event = new CustomEvent(eventName, {
        detail: data,
        bubbles: true,
        composed: true
      });
      console.info(eventName," Info is : ",event);
      document.dispatchEvent(event);    
      console.info("EVent Dispatched...5");  
    }


  return (
    <>
      <h1>Login Page : {info?.userId}</h1>
      <div> 
        <input type="text" placeholder="UserName" value={userName} onChange={onUserNameChange}></input> <br/>
        <input type="text" placeholder="Password" value={password} onChange={onPasswordChange}></input> <br/>
        <button type="button" onClick={onSubmit}>Login</button>
        <br></br>
      </div>
      <NavLink to="/">Go Back</NavLink>
    </>
  );
};

export default Login;
