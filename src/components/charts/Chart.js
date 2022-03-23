import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
   // To get the maximum value for datapoint values
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

return (
<div className='chart'>
    {props.dataPoints.map((dataPoint) => (
     <ChartBar 
     key={dataPoint.label}
     value={dataPoint.value}
     maxValue={totalMaximum}
     label={dataPoint.label}
     />
    ))}
</div>
);
   
};

export default Chart;