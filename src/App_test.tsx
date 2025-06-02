import Test from './components/Test';
// import "./styles-wc.css"

const HelloApp = (prop:any) => {

  console.log("Main App : ",prop)  
 
  return (
    <>  
      {/* <div style={{ backgroundColor: "aquamarine",
  fontFamily: "sans-serif",
  textAlign: "center"}}>  */}

  <div className="testClass">
      <div>Page Router </div>        
      <Test prop={prop}></Test>
  </div>
    </>
  )
}

export default HelloApp
