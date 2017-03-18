import React, { Component } from 'react';

import { f } from './Calculator';

class Graphic extends Component {
    constructor(props) {
        super(props);
        this.count   = 120;
        this.state   = {
            mouseX   : null,
            mouseY   : null,
            axes     : {
                scale: this.count
            }
        }

        this.onWheel     = this.onWheel.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onClick     = this.onClick.bind(this);
    }

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        let canvas       = this.refs.canvas,
            canvasRect   = canvas.getBoundingClientRect(),
            w            = canvas.width,
            h            = canvas.height;

        let axes         = this.state.axes,
            ctx          = this.refs.canvas.getContext("2d");

        axes.x0          = .5 + .5 * w;
        axes.y0          = .5 + .5 * h;
        axes.scale       = this.state.axes.scale;
        axes.doNegativeX = true;

        let fontSize     = 16;

        let funGraph = (axes, func, color) => {
            let xx, yy, dx = 4, x0 = axes.x0, y0 = axes.y0, scale = axes.scale;

            let iMax = Math.round((w - x0)/dx);
            let iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;

            ctx.beginPath();
            ctx.strokeStyle = color;
            for (let i = iMin; i <= iMax; i++) {
                xx = dx * i; yy = scale * f(xx/scale);
                i == iMin ? ctx.moveTo(x0 + xx, y0 - yy) :
                            ctx.lineTo(x0 + xx, y0 - yy);
            }
            ctx.stroke();
        
        }

        let showAxes = (axes) => {
            ctx.clearRect(0,0,w,h);
            let x0 = axes.x0;
            let y0 = axes.y0;
            let xmin = axes.doNegativeX ? 0 : x0;
            ctx.beginPath();
            ctx.strokeStyle = "#333";
            ctx.lineWidth = 1.5;
            ctx.moveTo(xmin, y0); ctx.lineTo(w, y0); // X axis
            ctx.moveTo(x0, 0);    ctx.lineTo(x0, h); // Y axis
            ctx.stroke();
            for(let i = 0; i < w / axes.scale; i++) {
                // x coordinate sections
                ctx.moveTo(x0 - (axes.scale * i), y0 + (axes.scale / 10));
                ctx.lineTo(x0 - (axes.scale * i), y0 - (axes.scale / 10));
                ctx.moveTo(x0 + (axes.scale * i), y0 + (axes.scale / 10));
                ctx.lineTo(x0 + (axes.scale * i), y0 - (axes.scale / 10));

                // y coordinate sections
                ctx.moveTo(x0 + (axes.scale/10), y0 - (axes.scale * i));
                ctx.lineTo(x0 - (axes.scale/10), y0 - (axes.scale * i));
                ctx.moveTo(x0 + (axes.scale/10), y0 + (axes.scale * i));
                ctx.lineTo(x0 - (axes.scale/10), y0 + (axes.scale * i));
            }
            ctx.stroke();
        }

        let funMethod = (axes, x, y) => {
            let scale = axes.scale,
                x0    = axes.x0,
                y0    = axes.y0;

            // ctx.beginPath();
            // ctx.strokeStyle = "blue";
            // ctx.lineWidth = 2;
            // for(let i = 0; i < x.length; i++) {
            //     if(i > 0)
            //     ctx.lineTo(x0 + x[i] * scale, y0 - y[i] * scale);		
            //     ctx.moveTo(x0 + x[i] * scale, y0 - y[i] * scale);
            // }
            // ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            ctx.setLineDash([15, 8]);
            ctx.moveTo(x0 + x[x.length - 1] * scale, y0); ctx.lineTo(x0 + x[x.length - 1] * scale, y0 - y[x.length - 1] * scale);
            ctx.moveTo(x0, y0 - y[x.length - 1 * scale]); ctx.lineTo(x0 - x[x.length - 1], y0 - y[x.length - 1] * scale);
            ctx.stroke();
            ctx.setLineDash([0, 0]);
            
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.lineWidth = 4;
            ctx.arc(x0 + x[x.length - 1] * scale, y0 - y[x.length - 1] * scale, scale/20, 0, 2 * Math.PI);
            ctx.font = `${scale/4}px sans-serif`;
            ctx.fillText(`y* = ${this.props.items.y}`, x0 + x[x.length - 1] * scale - (scale/6), y0 - y[x.length - 1] * scale + (scale/3));
            ctx.fillText(`x* = ${this.props.items.c}`, x0 + x[x.length - 1] * scale - (scale/6), y0 - (scale/6));
            ctx.stroke();
        }
        
        showAxes(axes);
        funGraph(axes, f, "rgb(11,153,11)");
        funMethod(axes, this.props.items.points.x, this.props.items.points.y);
    }

    onWheel(event) {
        let delta = event.deltaY / 10;
        if(delta === -delta) 
            this.setState({axes: {scale: this.count += delta }});
        else 
            this.setState({axes: {scale: this.count += delta }});
        this.count <= 50 ? this.setState({axes: {scale: this.count -= delta}}) : true;
        event.preventDefault();
    }

    onClick(event) {
        console.log("clicked");
    }

    onMouseMove(event) {
        this.setState({mouseX: event.clientX - this.state.axes.y0, mouseY: event.clientY - this.state.axes.x0});
    }

    render() {
        return (
            <canvas ref="canvas" id="graphic" width={1140} height={768} onWheel={this.onWheel} onMouseMove={this.onMouseMove} onClick={this.onClick}>
                HTML5 canvas not support in your browser!
            </canvas>
        );
    }
}

export default Graphic;