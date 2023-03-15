// import React from "react";
// import ReactDOM from "react-dom/client";
// import reactToWebComponent from 'react-to-webcomponent';

// // const WebComponent = reactToWebComponent(CostMiniChart, React, ReactDOM );

// export class MiniChart extends WebComponent  {
//     constructor() {
//         super()
//     }   
// }

// customElements.define("cost-minichart", MiniChart, {dashStyleAttributes: true, shadow: true });


import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const root = ReactDom.createRoot(
    document.getElementById('root')
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
