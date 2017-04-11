import React,   {    Component } from 'react';
import ReactDOM from 'react-dom';
//     stylesheets
import css      from '../../styles/styles.scss';
//     components
import Calculator from "../js/components/Calculator.js";
//     images
import logotype from "../images/react.png";

class App extends Component {
    render() {
        let h1 = "Optimization";
        return (
            <div>
                <div id="title">
                    <img src={ logotype } id="logo" alt="logotype" />
                    <h1><a href="">{ h1 }</a></h1>            
                </div>
                <hr/>
            </div>
        );
    }
}

// render page
ReactDOM.render(
    <div className="container">
        <App />
        <Calculator title="Calculator" />
    </div>,
    document.querySelector('#app')
);

export default App;