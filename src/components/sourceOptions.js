import  React, { Component } from 'react';

class sourceOption extends Component {
    render() {        
        const {id, authors, title} = this.props.source;
        const {firstName, lastName} = authors[0];

        return (
            <option value={id}>
                {title} by {firstName} {lastName} {authors.length === 1 ? ' ' : 'et al'}
            </option>
        );
    }
}

export default sourceOption;