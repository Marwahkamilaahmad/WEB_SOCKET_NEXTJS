import React, { useEffect, useState} from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });
const Chart = () => {
    const [data, setData] = useState([getData()]);
    const [layout, setLayout] = useState({ xaxis: { range: [0, 500] } });
  
    useEffect(() => {
      const interval = setInterval(() => {
        const newData = getData();
        setData((prevData) => [...prevData.slice(1), newData]);
      }, 100);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div>
        <Plot
          data={[
            {
              y: data,
              type: 'line',
            },
          ]}
          layout={layout}
        />
      </div>
    );
  };
  

function getData() {
  return Math.random();
}

export default Chart;