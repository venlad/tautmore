import React, { useState, useEffect } from 'react';
import './style/braingym.scss';
import { connect } from 'react-redux';
import { array, string } from 'prop-types';
import BraingymHead from './BraingymHead';
import Braingymstepperpart from './Braingymstepperpart';
import QuestionAns from './QuestionAns';
import BraingymUnlock from './BraingymUnlock';
import chestMessage from './mockData/chestData';
import {
    masterBraingymidAction,
    getQuestionbytagAction,
} from '../../../stores/BrainGym/BrainGymAction';

const Braingym = ({
    masterBraingymid,
    questionByTag,
}) => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [select, setSelect] = useState('');
    const [counter, setCounter] = useState(1);
    const [time, setTime] = useState(0);
    const [timeOn, setTimeOn] = useState(true);

    const [eachtime, setEachtime] = useState(0);
    const [eachtimeOn, setEachTimeOn] = useState(true);

    const [local, setLocal] = useState(true);
    const question = questionByTag?.[0];

    useEffect(() => {
        masterBraingymid();
    }, [masterBraingymid]);

    useEffect(() => {
        let interval = null;

        if (question && timeOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timeOn, question]);

    const [currenttime, setCurrenttime] = useState();

    useEffect(() => {
        setCurrenttime(`${(`0${Math.floor((time / 60000) % 60)}`).slice(-2)
        }:${
            (`0${Math.floor((time / 1000) % 60)}`).slice(-2)}`);
        const localdata = localStorage.getItem('brain-gym-data');
        const localvalue = JSON.parse(localdata);
        const localtime = localvalue?.timeminutesecond;
        if (localtime && local) {
            setTime(localtime);
            setLocal(false);
        }
    });

    useEffect(() => {
        let intervalEach = null;
        setEachTimeOn(true);
        if (question && eachtimeOn) {
            intervalEach = setInterval(() => {
                setEachtime((prevTimeEach) => prevTimeEach + 1000);
            }, 1000);
        } else {
            clearInterval(intervalEach);
        }
        return () => clearInterval(intervalEach);
    }, [eachtimeOn, question]);

    const [eachcurrenttime, setEachcurrenttime] = useState();

    useEffect(() => {
        setEachcurrenttime(`${(`0${Math.floor((eachtime / 60000) % 60)}`).slice(-2)
        }:${
            (`0${Math.floor((eachtime / 1000) % 60)}`).slice(-2)}`);
    });

    return (
        <div className="brain-gym-main braingym-page">
            <BraingymHead />
            <div className="brain-gym-bottom">
                <Braingymstepperpart
                    step={step}
                    time={time}
                    setTime={setTime}
                    timeOn={timeOn}
                    setTimeOn={setTimeOn}
                    question={question}
                    timeminutesecond={currenttime}
                />
                <QuestionAns
                    setOpen={setOpen}
                    step={step}
                    select={select}
                    setSelect={setSelect}
                    Questionbytag={questionByTag}
                    counter={counter}
                    setCounter={setCounter}
                    time={time}
                    timeminutesecond={time}
                    question={question}
                    setTimeOn={setTimeOn}
                    setEachTimeOn={setEachTimeOn}
                    eachcurrenttime={eachcurrenttime}
                    setEachtime={setEachtime}
                />
                <BraingymUnlock
                    open={open}
                    setOpen={setOpen}
                    message={chestMessage}
                    step={step}
                    setStep={setStep}
                    select={select}
                    setSelect={setSelect}
                    counter={counter}
                    setCounter={setCounter}
                    timeminutesecond={currenttime}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    masterBrainGym: state.BrainGym.MasterBrainGym?.gym,
    questionByTag: state.BrainGym.questionByTag,
});

const mapDispatchToProps = (dispatch) => ({
    masterBraingymid: () => dispatch(masterBraingymidAction()),
    getQuestionbytag: (data) => dispatch(getQuestionbytagAction(data)),
});

Braingym.propTypes = {
    masterBraingymid: string.isRequired,
    questionByTag: array.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Braingym);
