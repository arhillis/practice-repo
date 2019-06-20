import React from 'react';
import './App.css';
import uuid from 'uuid';
import Sources from './components/sources';
import EditForm from './components/editForm';
import SelectForm from './components/selectForm';

class App extends React.Component { 
  constructor(props){
    super(props);

    this.state = {
      sources: [
        {
          id: uuid.v4(),
          title: "You don't know Jack",
          authors: [
            {
              id: uuid.v4(),
              firstName: "Jill",
              lastName: "Hillard"
            }
          ],
          publisher: "Random House Books",
          year: 2004
        },
        {
          id: uuid.v4(),
          title: "Jane Eyre",
          authors: [
            {
              id: uuid.v4(),
              firstName: "Charlotte",
              lastName: "Bronte"
            }
          ],
          publisher: "Thornfield Media",
          year: 2005
        },
        {
          id: uuid.v4(),
          title: "Simple CSS",
          authors: [
            {
              id: uuid.v4(),
              firstName: "Debbie",
              lastName: "Developer"
            },
            {
              id: uuid.v4(),
              firstName: "Donnie",
              lastName: "Developer"
            }
          ],
          publisher: "DevWorld Press",
          year: 2006
        },
      ]
    };

    this.removeSource = this.removeSource.bind(this);
  }

  removeSource(id){
    this.setState({
      sources: this.state.sources.filter(source => source.id !== id)
    })
  }

  render(){
    const {sources} = this.state;
    return (
      <div id="Works" className="container App">
      <h1 id="head">Works Cited</h1>      
      <Sources sources={sources}/>
      <fieldset className="row">
        <EditForm sources={sources} />
        <SelectForm sources={sources} removeSource={this.removeSource}/>        
      </fieldset>
    </div>
    );
  }

  
}

export default App;
