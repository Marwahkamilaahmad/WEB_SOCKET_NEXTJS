import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

function Charts() {
  const [layout, setLayout] = useState({
    xaxis: { range: [new Date()] },
  });

  const [data, setData] = useState([
    {
      x: [new Date()],
      y: [rand()],
      mode: "lines",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      const update = {
        x: [[time]],
        y: [[rand()]],
      };

      setData((prevData) => {
        return [
          {
            x: [...prevData[0].x, time],
            y: [...prevData[0].y, rand()],
            mode: "lines",
            line: { color: "#80CAF6" },
          },
        ];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [layout.xaxis.range]);

  function rand() {
    return Math.random();
  }

  return (
      <div className="card">
        <div className="card-body">
          <Plot data={data} layout={layout} />
        </div>
    </div>
  );
}

export default Charts;

// import dynamic from "next/dynamic";

// import React, { useState , useEffect} from "react";

// const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// function Charts2() {
//   const [layout, setLayout] = useState({
//     xaxis: { range: [new Date] },
//   });
//   const [data, setData] = useState([
//     {
//       y: [new Date()],
//       type: "line",
//     },
//   ]);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newData = rand();
//       setData((prevData) => [...prevData.slice(1), newData]);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <Plot
//         data={[
//           {
//             y: data,
//             type: "line",
//           },
//         ]}
//         layout={layout}
//       />
//     </div>
//   );
// }

// function rand() {
//   return Math.random();
// }

// export default Charts2;
