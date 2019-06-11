import React, { Component } from 'react';

class Authors extends Component {
    onChange (){
        console.log('How many authors?')
    }
    render() {
        return (
            <div className="author-group">
                    <div className="form-group">
                        <label htmlFor="num-authors">Authors:</label>
                        <select className="form-control" onChange={this.onChange}>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three or more</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author" className="col-form-label">Author</label>
                        <input type="text" className="form-control form-control-sm" name="author"></input>
                    </div>
                </div>
        );
    }
}

export default Authors;