import { useEffect } from "react";
import { useNavigate } from "react-router";


const Test = (prop:any) => {

    const navigator = useNavigate();
    console.info("TEST : ",prop);

    useEffect(() => {
        console.log("navigating to Home.");
        navigator("/home");
    })

    return ( <>
        <div>
        <h1> DEV TEST : {prop?.prop?.info?.userId} </h1>

        </div>
    </> );
}
 
export default Test;