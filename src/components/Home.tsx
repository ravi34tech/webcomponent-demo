import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Home = (prop: any) => {
    console.log("Home : ",prop);
    const [data, setData] = useState<any>();
    useEffect(() =>{
        setData(prop.data);
    })

    return (
    <>
        <h1>Home Page : {data?.name}</h1>

        <NavLink to={"/login"} state={{
            loginName: "kumar", password: "password"
        }}>
            Login
        </NavLink>  &nbsp;&nbsp;
        <NavLink to={"/dashboard"}  state={{
            name:data?.name
        }}>
            DashBoard
        </NavLink>
    </> 
    );
}
 
export default Home;