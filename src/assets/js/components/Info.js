import React, { Component } from 'react';

const Warning = () => {
    let iconInfo = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIzLjYyNSAyMy42MjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIzLjYyNSAyMy42MjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8cGF0aCBkPSJNMTEuODEyLDBDNS4yODksMCwwLDUuMjg5LDAsMTEuODEyczUuMjg5LDExLjgxMywxMS44MTIsMTEuODEzczExLjgxMy01LjI5LDExLjgxMy0xMS44MTMgICBTMTguMzM1LDAsMTEuODEyLDB6IE0xNC4yNzEsMTguMzA3Yy0wLjYwOCwwLjI0LTEuMDkyLDAuNDIyLTEuNDU1LDAuNTQ4Yy0wLjM2MiwwLjEyNi0wLjc4MywwLjE4OS0xLjI2MiwwLjE4OSAgIGMtMC43MzYsMC0xLjMwOS0wLjE4LTEuNzE3LTAuNTM5cy0wLjYxMS0wLjgxNC0wLjYxMS0xLjM2N2MwLTAuMjE1LDAuMDE1LTAuNDM1LDAuMDQ1LTAuNjU5YzAuMDMxLTAuMjI0LDAuMDgtMC40NzYsMC4xNDctMC43NTkgICBsMC43NjEtMi42ODhjMC4wNjctMC4yNTgsMC4xMjUtMC41MDMsMC4xNzEtMC43MzFjMC4wNDYtMC4yMywwLjA2OC0wLjQ0MSwwLjA2OC0wLjYzM2MwLTAuMzQyLTAuMDcxLTAuNTgyLTAuMjEyLTAuNzE3ICAgYy0wLjE0My0wLjEzNS0wLjQxMi0wLjIwMS0wLjgxMy0wLjIwMWMtMC4xOTYsMC0wLjM5OCwwLjAyOS0wLjYwNSwwLjA5Yy0wLjIwNSwwLjA2My0wLjM4MywwLjEyLTAuNTI5LDAuMTc2bDAuMjAxLTAuODI4ICAgYzAuNDk4LTAuMjAzLDAuOTc1LTAuMzc3LDEuNDMtMC41MjFjMC40NTUtMC4xNDYsMC44ODUtMC4yMTgsMS4yOS0wLjIxOGMwLjczMSwwLDEuMjk1LDAuMTc4LDEuNjkyLDAuNTMgICBjMC4zOTUsMC4zNTMsMC41OTQsMC44MTIsMC41OTQsMS4zNzZjMCwwLjExNy0wLjAxNCwwLjMyMy0wLjA0MSwwLjYxN2MtMC4wMjcsMC4yOTUtMC4wNzgsMC41NjQtMC4xNTIsMC44MTFsLTAuNzU3LDIuNjggICBjLTAuMDYyLDAuMjE1LTAuMTE3LDAuNDYxLTAuMTY3LDAuNzM2Yy0wLjA0OSwwLjI3NS0wLjA3MywwLjQ4NS0wLjA3MywwLjYyNmMwLDAuMzU2LDAuMDc5LDAuNTk5LDAuMjM5LDAuNzI4ICAgYzAuMTU4LDAuMTI5LDAuNDM1LDAuMTk0LDAuODI3LDAuMTk0YzAuMTg1LDAsMC4zOTItMC4wMzMsMC42MjYtMC4wOTdjMC4yMzItMC4wNjQsMC40LTAuMTIxLDAuNTA2LTAuMTdMMTQuMjcxLDE4LjMwN3ogICAgTTE0LjEzNyw3LjQyOWMtMC4zNTMsMC4zMjgtMC43NzgsMC40OTItMS4yNzUsMC40OTJjLTAuNDk2LDAtMC45MjQtMC4xNjQtMS4yOC0wLjQ5MmMtMC4zNTQtMC4zMjgtMC41MzMtMC43MjctMC41MzMtMS4xOTMgICBjMC0wLjQ2NSwwLjE4LTAuODY1LDAuNTMzLTEuMTk2YzAuMzU2LTAuMzMyLDAuNzg0LTAuNDk3LDEuMjgtMC40OTdjMC40OTcsMCwwLjkyMywwLjE2NSwxLjI3NSwwLjQ5NyAgIGMwLjM1MywwLjMzMSwwLjUzLDAuNzMxLDAuNTMsMS4xOTZDMTQuNjY3LDYuNzAzLDE0LjQ5LDcuMTAxLDE0LjEzNyw3LjQyOXoiIGZpbGw9IiMzOTg1ZTMiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";

    let h3   = "Information";
        
    return (
        <div id="warning">
            <div id="warning-title">
                <img src={iconInfo} alt="icon"/>
                <h3>{h3}</h3>
            </div>
            <div id="warning-content">
                <p>Исследуемая функция <i><strong>f(x)</strong></i> должна быть <strong>унимодальной</strong>.</p>
                <h4>Определение:</h4>
                <ul>
                    <li>Точка x* локального минимума функции принадлежит отрезку [a,b]</li>
                    <li>Для любых двух точек отрезка x1 и x2, взятых по одну сторону от точки минимума, точке x1 более близкой к точке минимума соответствует меньшее значение функции.</li>
                </ul>
                <h4>Например:</h4>
                <p>Функция f(x) = x*x + 2*x на интервале [-3, 5]</p>
            </div>
        </div>
    );
}

export default Warning;