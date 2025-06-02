# React + TypeScript + Vite

## Run Application

Run the below command

- npm run build
- open the public/index.html file in live server

embedd the "ravi-web-component.umd.js" file in any html or component add the logic what is menctioned in index.html like data and call back functions.

------------------------------------------------------------------

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```html
  <body>
  <div id="parent-app">
      <h1 class="App">WebComponent from GitHub Application...</h1>
      <div id="CHILD_TEXT">

      </div>
  </div>
  <div id="consent-web-component">
    <test-wc 
        id="WC-GIT-HUB"
        name="Server web Component GitHub Test" 
        link="login" 
        token="token-conset-456780-github"
        on-success="onSuccessParentCall"
        on-error="onErrorParentCall"
      >
    </test-wc>
  </div>
  <script>
    var json = {
      userId: "ABC",
      authTest: "succes"
    }

    var jsonObj =JSON.stringify(json);

    document.getElementById('WC-GIT-HUB').setAttribute('info', jsonObj);

      window.onSuccessParentCall = function(e) {
        console.info("PARENT : SUCCESS : ",e);
        var htmlvalue = `<div style="background-color: green;">`+ JSON.stringify(e) +`</div>`;
        document.getElementById("CHILD_TEXT").innerHTML = htmlvalue
      }

      function onErrorParentCall(event) {
        console.info("PARENT : ERROR : ",event);
        var htmlvalue = `<div style="background-color: red;">`+ JSON.stringify(event) +`</div>`;
        document.getElementById("CHILD_TEXT").innerHTML = htmlvalue;
      }
  </script>
  <script src="../dist/ravi-web-component.umd.js"></script>
</body>

```

```js

```
