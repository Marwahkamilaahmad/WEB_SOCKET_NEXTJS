// import React from "react";
// import { getLocalData } from "/src/localData";
// import Navbar from "@/components/Navbar";

// export default function TelemetryData({ localData }) {
//   // console.log('data', localData)
//   return (
//     <section>
//       <div>
//         <Navbar />
//       </div>
//       <section>
//         <div>
//           <h2>Telemetry List:</h2>
//           <ul>
//             <h5 class="card-title">Card title</h5>
//             {localData.children.map((child, index) => (
//               <li className="list-data" key={index}>
//                 name : {child.name}
//                 <br></br>value : {child.value}
//                 <br></br>timestamp :{child.timestamp}{" "}
//               </li>
//             ))}
//             <a href="#" class="btn btn-primary">
//               Button
//             </a>
//           </ul>
//         </div>
//       </section>
//     </section>
//   );
// }

// export async function getServerSideProps(context) {
//   const localData = await getLocalData();
//   //  const data = await fetch('/data/telemetry.json')
//   //   .then(response => response.json())

//   return {
//     props: { localData },
//   };
// }
import React from "react";
import { getLocalData } from "/src/localData";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

export default function TelemetryData({ localData }) {
  return (
    <section>
      <div>
        <Navbar />
      </div>
          <div className="container" style={{marginTop : "60px"}}>
          <h2 className="text-2xl font-bold">Telemetry List</h2>
          <div className="card w-full">
            <ul className="list-group">
              {localData.children.map((child, index) => (
                <li className="list-group-item list-group-item-action" style={{padding : "30px"}} key={index}>
                  <h5 className="card-title">{child.name}</h5>
                  <p>
                    <br />value: {child.value}
                    <br />timestamp: {child.timestamp}
                  </p>
                </li>
              ))}
              <br></br>
            </ul>
            <br></br>
          </div>
        </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const localData = await getLocalData();

  return {
    props: { localData },
  };
}
