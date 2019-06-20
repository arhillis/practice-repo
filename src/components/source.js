import React from 'react';

class Source extends React.Component{
    render(){
        const {title, authors, publisher, year} = this.props.source;

        if(authors.length === 1){
            const {firstName, lastName} = authors[0];

            return (
                <li>
                    {lastName}, {firstName}. <cite>{title}</cite>. {publisher}, {year}.
                </li>
            )
        }else if(authors.length === 2){
            const [author1, author2] = authors;
            
            return (
                <li>
                    {author1.lastName}, {author1.firstName} and {author2.firstName} {author2.lastName}. <cite>{title}</cite>. {publisher}, {year}.
                </li>
            )
        }else{
            const {firstName, lastName} = authors[0];

            return (
                <li>
                    {lastName}, {firstName} et al. <cite>{title}</cite>. {publisher}, {year}.
                </li>
            )
        }
    }
}

export default Source;