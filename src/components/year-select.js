import React, { Component } from 'react';

class YearSelect extends Component{ 
    render() {
        const years = [];

        for(let i = 2019; i > 1899; i--){
            years.push(i)
        }

        return (
            <select 
                className="form-control" 
                id="yearSelect">  
                    {years.map(year => 
                        (<option key={year}>{year}</option>)
                    )}
            </select>
        );

    }
}

export default YearSelect;