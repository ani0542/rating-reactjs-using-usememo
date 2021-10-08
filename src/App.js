// import React from 'react'
// import DataTable from './components/DataTable'
// // import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//     return (
//         <>
//             <DataTable/>
//         </>
//     )
// }

// export default App





// import React from "react";
// import { saveAs } from "file-saver";

// export default function App() {
//   const saveFile = () => {
//     saveAs(
//       "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//       "example.pdf"
//     );
//   };
//   return (
//     <div>
//       <button onClick={saveFile}>download</button>
//     </div>
//   );
// }



import React from 'react'
import Rating from "./pages/Rating"
function App() {
  return (
    <>
          <Rating/>
    </>
  )
}

export default App
