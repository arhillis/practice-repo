import React from 'react';
import './App.css';
import Sources from './components/sources';

class App extends React.Component { 
  state = {
    sources: [
      {
        id: 1,
        title: "You don't know Jack",
        author: {
          firstName: "Jill",
          lastName: "Hillard"
        },
        publisher: "Random House Books",
        year: 2004
      },
      {
        id: 2,
        title: "Jane Eyre",
        author: {
          firstName: "Charlotte",
          lastName: "Bronte"
        },
        publisher: "Thornfield Media",
        year: 2005
      },
      {
        id: 3,
        title: "Simple CSS",
        author: {
          firstName: "Debbie",
          lastName: "Developer"
        },
        publisher: "DevWorld Press",
        year: 2006
      },
    ]
  }
  render(){
    return (
      <div id="Works" className="container App">
      <h1 id="head">Works Cited</h1>      
      <Sources sources={this.state.sources}/>
      <fieldset className="row">
        <form className="form-group col-12 col-md-6" id="source-form">
          Form goes here
        </form>

        <form id="editPanel" className="col-12 col-md-6">
          <select id="srcOptions" className="form-control">
          </select>
          <button id="edit-btn" className="btn btn-default">Edit Source</button>
          <button id="remove-btn" className="btn">Remove Source</button>
        </form>
      </fieldset>
    </div>
    );
  }

  
}

export default App;
