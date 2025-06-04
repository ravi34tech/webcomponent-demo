import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const DashBoard = (prop: any) => {
  const [data, setData] = useState<any>();
  const { name, info, onConsentSuccess, onConsentError, onConsentEvent } = prop.data;
  useEffect(() => {
    console.log("DashBoard prop : ", prop);
    setData(prop.data);
    onConsentEvent({
      details: { page: "DashBoard", status: "Open", message: "Open the Dashboard page" },
      bubbles: true,
      composed: true,
    });
  }, []);
  return (
    <>
      <h1>DashBoard Page : {info?.userId}</h1>
      <br />
      <br />
      <NavLink to="/">Go Back</NavLink>
    </>
  );
};

export default DashBoard;
