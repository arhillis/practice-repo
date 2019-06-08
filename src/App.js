import React from 'react';
import './App.css';
import Sources from './components/sources';
import EditForm from './components/editForm';
import SelectForm from './components/selectForm';

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
    const {sources} = this.state;
    return (
      <div id="Works" className="container App">
      <h1 id="head">Works Cited</h1>      
      <Sources sources={sources}/>
      <fieldset className="row">
        <EditForm sources={sources} />
        <SelectForm sources={sources} />        
      </fieldset>
    </div>
    );
  }

  
}

export default App;
