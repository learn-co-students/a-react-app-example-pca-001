import React, { Component } from 'react';
import moment from 'moment';
//App.js is pulling in specific content from these two packages
//They are being imported from the node_modules folder
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {
// class App extends whatever render
  render() {
    //Component and moment are both being used in the render() method
    return (
      <div className="App">
        <header className="App-header">
          <p>Now</p>
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />
      </div>
    );
  }
}
export default App;
//^denotes that our App class is the main thing we want to export from our App.js file
