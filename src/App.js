import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
 
// The wrapper exports only a default component class that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props). All other
// interfaces like Options come from the Highcharts module itself.
 
const options = {
    title: {
        text: 'My chart'
    },
    series: [{
        type: 'line',
        data: [1, 2, 3]
    }]
}
 
// React supports function components as a simple way to write components that
// only contain a render method without any state (the App component in this
// example).
 
const App = (props) => <div>
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
        {...props}
    />
</div>
 

export default App;
