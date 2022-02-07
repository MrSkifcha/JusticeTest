import React from 'react';

const Filter = ({onClick, buttons}) => {

    return (
        <div className="filter">
            {buttons.map(button =>
                <button onClick={onClick}
                        className={button.active === true ? "active" : ""}
                        id={button.name}
                        key={button.name}>
                    {button.name}
                </button>
            )}
        </div>
    );
};

export default Filter;
