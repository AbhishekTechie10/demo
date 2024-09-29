import "./App.css";
import { ParentComponents } from "./component/parentcomponents";

function App() {
  const element = <h1> hello, world !!</h1>;
  return (
    <div className="App">
      {element}
      <ParentComponents />
    </div>
  );
}

export default App;






// import "./App.css";
// import Message from './component/message'; 

// function App() {
//   return (
//     <div className="App">
//       <Message />
//     </div>
//   );
// }

// export default App;




// export default App;

// import "./App.css";
// import Bye from './component/bye'; // Adjust import path if needed

// function App() {
//   return (
//     <div className="App">
//       <Bye />
//     </div>
//   );
// }

// export default App;



// import "./App.css";
// import Message from './component/message';
// import Bye from './component/bye'; // Adjust import path if needed
// import Welcome from './component/welcome'; // Adjust import path if needed

// function App() {
//   return (
//     <div className="App">
//       <Message />
//       <Bye />
//       <Welcome />
//     </div>
//   );
// }

// export default App;





// import "./App.css";
// import { Bye } from "./component/bye.js";
// import Welcome from './component/welcome'


// function App() {
//   return (
//     <div className="App">
//       <Bye></Bye>
//       <Welcome></Welcome>

//     </div>
//   );
// }
// export default App;


