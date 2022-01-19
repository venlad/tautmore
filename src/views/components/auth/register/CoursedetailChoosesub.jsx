import React, { useState } from 'react';
import Select from 'react-select';
import minus from '../../../../assets/images/minus-button.png';
import plus from '../../../../assets/images/plus-button.png';
import remove from '../../../../assets/images/remove-red.svg';
import add from '../../../../assets/images/plus-green.svg';

const CoursedetailChoosesub = () => {
    const [part, setPart] = useState(['']);
    const [counter, setCounter] = useState(0);

    const addSubject = () => {
        setPart([...part, '']);
    };

    const plusCounter = () => {
        setCounter(counter + 1);
    };

    const minusCounter = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <h3 className="text-center bottom-title">choose subjects</h3>
            <p className="text-center bottom-desc">Select either one or multiple subjects you want to study</p>
            {part.map(() => (
                <div className="row choose-subject">
                    <div className="col-md-6 course-detail-select">
                        <div className="label-div">Select subject*</div>
                        <Select />
                    </div>
                    <div className="col-md-6 course-detail-select">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="label-div">Select classes*</div>
                                <div className="counter" onClick={minusCounter} aria-hidden="true"><img src={minus} alt="minus" /></div>
                                <div className="input-box"><input type="text" value={counter} /></div>
                                <div className="counter" onClick={plusCounter} aria-hidden="true"><img src={plus} alt="plus" /></div>
                                <div className="remove-part"><img src={remove} alt="remove" /> REMOVE</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 course-detail-select">
                        <div className="label-div">Select exam(s)*</div>
                        <Select />
                    </div>
                    <div className="col-md-6 course-detail-select" />
                </div>
            ))}
            <div className="col-md-6 course-detail-select" />
            <div className="text-center">
                <button type="button" className="add-subject" onClick={addSubject}>
                    <img src={add} alt="add" />add subject
                </button>
            </div>
        </div>
    );
};

export default CoursedetailChoosesub;
