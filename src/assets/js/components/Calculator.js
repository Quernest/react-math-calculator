import React, { Component } from 'react';

import Graphic from './Graphic';
import Warning from './Info';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            f: '',
            a: '-3',
            b: '5',
            select: 'dichotomy',
            isRender: false,
        };
        this.handleSubmit      = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.f = (x) => eval(this.state.f); // function from input
    }

    handleInputChange(event) {
        const target = event.target;
        const value  = target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.state.funcstr = this.state.f // fix

        this.a = parseFloat(this.state.a);
        this.b = parseFloat(this.state.b);

        const EPS = 0.01;
        const PHI = 0.382;

        let k = 0,
            n;

        let arrayX = [], 
            arrayY = [];
        
        let a = this.a, 
            b = this.b;

        let x1, x2, y1, y2;
        let delta = EPS / 2;

        switch(this.state.select) {
            case 'dichotomy' :
                k = 1;
                while (true) {
                    n = 2 * k;
                    x1 = (a + b - delta) / 2;
                    x2 = (a + b + delta) / 2;

                    y1 = this.f(x1);
                    y2 = this.f(x2);

                    y1 <= y2 ? b = x2 : a = x1;

                    if(Math.abs(b - a) < EPS) {
                        break;
                    }

                    this.c = (a + b) / 2;
                    this.y = this.f(this.c);

                    arrayX.push(this.c);
                    arrayY.push(this.y);
                    k += 1;
                }
                this.setState({points: {x: arrayX, y: arrayY}});
                break;
            case 'gold' :
                x1 = a + PHI * (b - a);
                x2 = b - PHI * (b - a);
                y1 = this.f(x1);
                y2 = this.f(x2);

                while(true) {
                    n = 2 * k;

                    if(y1 <= y2) {
                         b = x2;
                        x2 = x1;
                        x1 = a + PHI * (b - a);
                        y2 = y1; y1 = this.f(x1);
                    } else {
                        a = x1;
                        x1 = x2;
                        x2 = b - PHI * (b - a);
                        y1 = y2; y2 = this.f(x2);
                    }

                    if(Math.abs(b - a) < EPS) {
                        break;
                    }
                    this.c = (a + b) / 2;
                    this.y = this.f(this.c);
                    arrayX.push(this.c);
                    arrayY.push(this.y);
                    k += 1;
                }   
                this.setState({points: {x: arrayX, y: arrayY}});
                break;
            case 'fibonacci' :
                
                break;
        }
        
        if(this.c == undefined) {
            this.setState({ c: 'X* not found' });
        } else {
            this.setState({ 
                c: this.c.toFixed(4),
                y: this.y.toFixed(4),
                intervals: n
            });
            this.setState({isRender: true});           
        }
    }

    render() {

        let getRandom = () => Math.random();

        let canvas  = null,
            output  = null, 
            warning = <Warning />;

        if (this.state.isRender) {
            canvas = <Graphic items={this.state} isRender={this.state.isRender}/>;
            output = [
                <span key={getRandom()}> <strong>x*</strong> = {this.state.c} </span>,
                <span key={getRandom()}> <strong>y*</strong> = {this.state.y} </span>, 
                <span key={getRandom()}> <strong>n</strong> = {this.state.intervals} </span>,
                <div key={getRandom()} id="results-info">
                    <p><strong>x*</strong> &ndash; координата точки, где функция f(x) имеет минимум.</p>
                    <p><strong>y*</strong> &ndash; значение функции f(x) в этой точке.</p>
                    <p><strong>n</strong> &ndash; количество интервалов разбиения.</p>
                </div>
            ];
            warning = null;
        }
        
        return (
            <div id="calculator">
                <form 
                    id="form"
                    onSubmit={this.handleSubmit}
                    >
                    <select value={this.state.select} name="select" onChange={this.handleInputChange}>
                        <option value="dichotomy">Dichotomy</option>
                        <option value="gold">Golden section</option>
                        <option value="fibonacci ">Fibonacci</option>
                    </select>
                    <input 
                        type="text"
                        placeholder="f(x)"
                        name="f"
                        value={this.state.f}
                        onChange={this.handleInputChange}
                        required 
                    />
                    <div>
                    <input 
                        type="number"
                        name="a"
                        placeholder="[a]"
                        value={this.state.a}
                        onChange={this.handleInputChange}
                        required 
                    />
                    <input 
                        type="number"
                        name="b"
                        placeholder="[b]"
                        value={this.state.b}
                        onChange={this.handleInputChange}
                        required 
                    />
                    </div>
                    <button>Solve</button>
                    {output}
                </form>
                <div id="results">
                    {canvas}
                    {warning}
                </div>
            </div>
        );
    }
}

export default Calculator;
