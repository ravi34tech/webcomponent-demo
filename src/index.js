import r2wc from "@r2wc/react-to-web-component"
import App from "./App"
import React from "react"
import * as ReactDOMClient from 'react-dom/client'; 

const TestWC = r2wc(App, {
  props: {     
    onConsentSuccess:"function",  // these functions are html events
    onConsentError:"function",
    onConsentEvent:"function",
    name: "string" , 
    link: "string", 
    token: "string", 
    info: "json"
  },
  events: {
    onConsentSuccess: "onConsentSuccess",  // react-app events
    onConsentError: "onConsentError",
    onConsentEvent: "onConsentEvent"
  },
  react: React,
  ReactDOM: ReactDOMClient,
})

customElements.define("test-wc", TestWC)