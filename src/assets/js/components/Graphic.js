import React, { Component } from 'react';


const screenSize = {
    w : window.innerWidth,
    h : window.innerHeight,
    ow: window.outerWidth,
    oh: window.outerHeight
};

class Graphic extends Component {
    constructor(props) {
        super(props);

        this.width  = 1200,
        this.height = 800;
        this.scale  = 100;

        this.state = {
            axes: {
                scale: this.scale
            },
            canvas: {
                width: this.width,
                height: this.height,
                halfWidth: .5 + .5 * this.width,
                halfHeight: .5 + .5 * this.height,
            },
            rect: {},
        }

        this.onWheel     = this.onWheel.bind(this);
        this.onClick     = this.onClick.bind(this);
        
        this.f = (x) => eval(this.props.items.funcstr); // input's function
    }

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        let canvas       = this.refs.canvas,
            w            = this.state.canvas.width,
            h            = this.state.canvas.height;

        let axes         = this.state.axes,
            ctx          = this.refs.canvas.getContext("2d");

        let rect         = this.state.rect;
            rect.sizes   = canvas.getBoundingClientRect();
            rect.scaleX  = w / canvas.getBoundingClientRect().width;
            rect.scaleY  = h / canvas.getBoundingClientRect().height;

        axes.x0          = this.state.canvas.halfWidth;
        axes.y0          = this.state.canvas.halfHeight;
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
                xx = dx * i; yy = scale * this.f(xx/scale);
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

            ctx.beginPath();
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            ctx.setLineDash([15, 8]);
            ctx.moveTo(x0 + x[x.length - 1] * scale, y0); ctx.lineTo(x0 + x[x.length - 1] * scale, y0 - y[x.length - 1] * scale);
            ctx.moveTo(x0, y0 - y[x.length - 1 * scale]); ctx.lineTo(x0 - x[x.length - 1], y0 - y[x.length - 1] * scale);
            ctx.stroke();
            ctx.setLineDash([0, 0]);
            
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.arc(x0 + x[x.length - 1] * scale, y0 - y[x.length - 1] * scale, scale/20, 0, 2 * Math.PI);
            ctx.font = `${scale/4}px sans-serif`;
            ctx.fillText(`y* = ${this.props.items.y}`, x0 + x[x.length - 1] * scale - (scale/6), y0 - y[x.length - 1] * scale + (scale/3));
            ctx.fillText(`x* = ${this.props.items.c}`, x0 + x[x.length - 1] * scale - (scale/6), y0 - (scale/6));
            ctx.stroke();
        }
        
        showAxes(axes);
        funGraph(axes, this.f, "rgb(11,153,11)");
        funMethod(axes, this.props.items.points.x, this.props.items.points.y);
    }

    onWheel(event) {
        let delta = event.deltaY / 5;
        if(delta === -delta) 
            this.setState({axes: {scale: this.scale += delta }});
        else 
            this.setState({axes: {scale: this.scale += delta }});
        this.scale <= 50 ? this.setState({axes: {scale: this.scale -= delta}}) : true;
        event.preventDefault();
    }

    onClick(event) {
        if(screenSize.w > 900 && screenSize.h > 600) {
            this.setState({
                canvas: {
                    width     : this.width,
                    height    : this.height,
                    halfWidth : (event.clientX - this.state.rect.sizes.left) * this.state.rect.scaleX,
                    halfHeight: (event.clientY - this.state.rect.sizes.top)  * this.state.rect.scaleY
                }
            })
        }
    }

    render() {
        return (
            <canvas ref="canvas" id="graphic" width={this.width} height={this.height} onWheel={this.onWheel} onClick={this.onClick}>
                HTML5 canvas not support in your browser!
            </canvas>
        );
    }
}

export default Graphic;