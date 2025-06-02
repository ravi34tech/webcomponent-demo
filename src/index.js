import r2wc from "@r2wc/react-to-web-component"
import App from "./App"

const TestWC = r2wc(App, {
  // shadow: "open",  
  props: { 
    onSuccess:"function",
    onError:"function",
    name: "string" , 
    link: "string", 
    token: "string", 
    info: "json"
  }
})

customElements.define("test-wc", TestWC)