// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import {BrowserRouter, Route, Routes, } from "react-router-dom";

import CreateRoom from './components/CreateRoom';
import Room from './components/Rooms';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateRoom />}></Route>
          <Route path="/room/:roomID" element={<Room/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
} 

export default App