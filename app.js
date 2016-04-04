/**
 * Created by root on 3/31/16.
 */
import React from "react";
import ReactDom from "react-dom";
import Hello from "./hello";

ReactDom.render(
    <Hello name="World" />,
    document.getElementById('main')
);
