import React from 'react';
//import logo from './logo.svg';
import './App.css';

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
function App() {
  return (
    <div className="container">
        <h2>Example Bootstrap Form</h2>
        <form>
          <div className="form-group">
              <label for="username">Username:</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" name="username"></input>
          </div>
          <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"></input>
          </div>
          <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"></input>
          </div>
          <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" name="remember"></input>
                <label className="form-check-label">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      
    </div>
  );
}

export default App;
