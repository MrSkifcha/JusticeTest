import React from 'react';

const Filter = ({options}) => {

    const filterList = (option) => {
        buttons.map(button => {
            button.active = true;
            return button;
        });
        console.log(option)
    }

    return (
        <div className="filter">
            {options.map(option =>
                <button onClick={() => filterList(option)} className={option.active === true ? "active" : ""} key={option.name}>{option.name}</button>
            )}
        </div>
    );
};

export default Filter;