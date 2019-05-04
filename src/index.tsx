import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "../frontend/src/components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);