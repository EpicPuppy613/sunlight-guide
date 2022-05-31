var elt = document.getElementById('graph');
var calculator = Desmos.GraphingCalculator(elt, {
    expressions: false,
    settingsMenu: false,
    lockViewport: true,
    xAxisLabel: 'Days Since Dec. 31',
    yAxisLabel: 'Hours of Sunlight',
});
calculator.setExpression({ id: 'portland', latex: 'p\\left(x\\right)=3.25\\sin\\left(\\frac{2\\pi}{365}\\left(x-80\\right)\\right)+12.15' , color: 'dodgerblue' });
calculator.setExpression({ id: 'melbourne', latex: 'm\\left(x\\right)=2.65\\sin\\left(\\frac{2\\pi}{365}\\left(x-264\\right)\\right)+12.15' , color: 'crimson' });
calculator.setExpression({ id: 'spring', latex: '\\left(80, 12.15\\right)', color: 'springgreen', showLabel: true});
calculator.setExpression({ id: 'fall', latex: '\\left(264, 12.15\\right)', color: 'orangered', showLabel: true});
calculator.setMathBounds({
    left: 0,
    right: 365,
    bottom: 7,
    top: 17
});

for (const element of document.getElementsByClassName('math')) {
    MQ.StaticMath(element);
}