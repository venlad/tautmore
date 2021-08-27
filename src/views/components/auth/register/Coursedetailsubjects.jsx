import React, { useState } from 'react';
import  { array, string } from 'prop-types';

const Coursedetailsubjects = ({ label, data }) => {
    const [checked, setChecked] = useState([]);
    const handleClick = (value) => {
        if (checked.indexOf(value) > -1) {
            const filteredValues = checked.filter((val) => val !== value);
            setChecked([...filteredValues]);
        } else {
            setChecked([...checked, value]);
        }
    };

    return (
        <div className="col-md-6 subject-list-main">
            <label className="label" htmlFor="sublist">{label}</label>
            <div>
                {data.map((val, ind) => (
                    <div
                        key={val.title}
                        className={`subject-list ${
                            checked.indexOf(ind) > -1 ? 'active' : ''
                        }`}
                    >

                        <label htmlFor={val.label} className="round">
                            <input type="checkbox" id={val.label} onClick={() => handleClick(ind)} />
                            <span className="checkmark"  />
                        </label>
                        {val.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

Coursedetailsubjects.propTypes = {
    data: array.isRequired,
    label: string.isRequired,
};

export default Coursedetailsubjects;
