import React, { Component } from 'react';
import SourceOptions from './sourceOptions';

class selectForm extends Component {
        render() {
            return (
                <form id="editPanel" className="col-12 col-md-6">
                    <select id="srcOptions" className="form-control mb-2">
                        {this.props.sources.map(source => 
                        <SourceOptions source = {source}
                        />)}
                    </select>
                    <button id="edit-btn" className="btn btn-primary mr-2">Edit Source</button>
                    <button id="remove-btn" className="btn btn-danger">Remove Source</button>
                </form>
            );
        }
}

export default selectForm;