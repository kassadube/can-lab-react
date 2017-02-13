import React from "react";
import { render } from "react-dom";
import {Root} from "./pages/Root";


class App extends React.Component {

    render () {
        return (
        <div className="container-fluid">
           <Root/>
        </div>
        );
    }
}

render(<App />, document.getElementById("app"));
