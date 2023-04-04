import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div style={{ backgroundColor: "black", color: "white", height:  "100vh"}}>
        <Header></Header>
        <hr style={{margin: 0}}></hr>
    </div>
);