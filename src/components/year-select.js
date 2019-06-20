import React, { Component } from 'react';

class YearSelect extends Component{ 
    render() {
        const years = [];

        for(let i = 2019; i > 1899; i--){
            years.push(i)
        }

        return (
            <select class="form-control" id="exampleFormControlSelect1">  
                {years.map(year => (<option>{year}</option>))}
            </select>
        );

    }
}

export default YearSelect;