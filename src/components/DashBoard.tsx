import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const DashBoard = (prop: any) => {
    const [data, setData] = useState<any>()
    const {container, name, link, token, userid, test, info} = prop.data;
      useEffect(() => {
        console.log("DashBoard prop : ",prop);
        setData(prop.data);
        prop.data.onSuccess({page: "DashBoard", status: "Success", message: "OnEffect"});
      });
    return (
    <>
        <h1>DashBoard Page : {info.userId}</h1>
        <br/><br/>
        <NavLink to="/">Go Back</NavLink>
    </> 
    );
}
 
export default DashBoard;