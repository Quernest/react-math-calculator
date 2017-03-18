import React, { Component } from 'react';

class Warning extends Component {
    render() {
        let icon = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxjaXJjbGUgc3R5bGU9ImZpbGw6IzQ4QTBEQzsiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIvPgo8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgeDE9IjI1IiB5MT0iMzciIHgyPSIyNSIgeTI9IjM5Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNMTgsMTYgIGMwLTMuODk5LDMuMTg4LTcuMDU0LDcuMS02Ljk5OWMzLjcxNywwLjA1Miw2Ljg0OCwzLjE4Miw2LjksNi45YzAuMDM1LDIuNTExLTEuMjUyLDQuNzIzLTMuMjEsNS45ODYgIEMyNi4zNTUsMjMuNDU3LDI1LDI2LjI2MSwyNSwyOS4xNThWMzIiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";
        
        let h3   = "Information";

        return (
            <div id="warning">
                <div id="warning-title">
                    <img src={icon} alt="warning"/>
                    <h3>{h3}</h3>
                </div>
                <div id="warning-content">
                    <p>Исследуемая функция <i><strong>f(x)</strong></i> должна быть <strong>унимодальной</strong>.</p>
                    <h4>Определение:</h4>
                    <ul>
                        <li>Точка x* локального минимума функции принадлежит отрезку [a,b]</li>
                        <li>Для любых двух точек отрезка x1 и x2, взятых по одну сторону от точки минимума, точке x1 более близкой к точке минимума соответствует меньшее значение функции.</li>
                    </ul>
                    <p>Например: <i>f(x) = x*x + 2*x</i> на интервале [-3, 5]</p> 
                </div>
            </div>
        );
    }
}

export default Warning;