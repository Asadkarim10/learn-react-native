import React from "react";
import ReactDOM from "react-dom";
import { Container, H1 } from "./common"
ReactDOM.render(<Container>
    <H1 style={{ color: 'green' }}>hello</H1>
    <H1>World</H1>
</Container>
    , document.getElementById("root"))