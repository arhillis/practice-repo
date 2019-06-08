import React from 'react';
import Source from './source';

class Sources extends React.Component{
    render(){
        return (
            <ul id="sources" key="sources" style={{listStyleType:'none'}}>
                {this.props.sources.map(source => 
                    <Source source ={source}/>
                )}
            </ul>
        )
    }
}

export default Sources;