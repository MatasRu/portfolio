import React, { Component } from "react";
import { init } from "ityped";

export default class Type extends Component {
    componentDidMount() {
        const myElement = document.querySelector("#myElement");
        init(myElement, {
            showCursor: false,
            strings: ["Web Designer", "Developer", "Freelancer"]
        });
    }
    render() {
        return <div className="orange" id="myElement"/>;
    }
}