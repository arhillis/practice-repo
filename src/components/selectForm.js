import React, { Component } from 'react';
import SourceOptions from './sourceOptions';

class selectForm extends Component {
        state = {
            selectedSource: this.props.sources[0]
        };

        editSource(e){
            e.preventDefault();
            const id = e.target.value.key;
            let source = this.props.sources.filter(source =>{
                return source.id === id;
            });
            console.log(source);
        }

        selectSource(e){
            e.preventDefault();
            const id = e.target.value;
            let source = this.props.sources.filter(source =>{
                return source.id === id;
            })[0];

            this.setState({selectedSource: source});

        }

        removeSource(e){
            e.preventDefault();
            this.props.removeSource(this.state.selectedSource.id);
        }

        render() {
            return (
                <form id="editPanel" className="col-12 col-md-6">
                    <select id="srcOptions" 
                            className="form-control mb-2" 
                            onInput={this.selectSource.bind(this)}>
                            {this.props.sources.map(source => 
                                <SourceOptions source = {source} key={source.id}/>
                            )}
                    </select>

                    <input  type="submit" 
                            id="edit-btn" 
                            className="btn btn-primary mr-2" 
                            value="Edit Source" />

                    <input  type="submit" 
                            id="remove-btn" 
                            className="btn btn-danger"
                            onClick={this.removeSource.bind(this)}
                            value="Remove Source" />
                </form>
            );
        }
}

export default selectForm;