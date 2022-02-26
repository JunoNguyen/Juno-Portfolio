import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
        <Portfolio></Portfolio>
    </div>
  );
}

export default App;

// import React from 'react';
// First we import our Hello component from our components folder.


// // React apps typically have a single App component at the very top that can reference other React components.
// // This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
// function App() {
//   return <Portfolio />;
// }

// export default App;