import React, { useState } from 'react';
import { Link,  useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import Logo from '../../../../assets/images/Logo.png';
import close from '../../../../assets/images/close.png';

import './register.scss';
import  stepdata  from './mockData/Stepperdata';
import Coursedetail from './Coursedetail';
import TeacherRequirements from './TeacherRequirements';
import Mydetails from './Mydetails';
import Createstudentaccount from './Createstudentaccount';
import Success from './Success';
import SuccessTeacher from './SuccessTeacher';
import {
    chevRight, select, student, parents, teachers, errowRight,
} from '../../../../assets/icons/IconList';
import {
    register, registerTeacher, sendOtpAction, coCurricularActivitiesAction,
} from '../../../../stores/Auth/AuthAction';
import RegisterOption from './RegisterOption';
import PayFees from './PayFees';

const Register = ({
    registerAction, isOtpVerified, registerTeacherAction, fetchCoCurricularActivities,
}) => {
    const res = sendOtpAction({ phoneNumber: '9990242387' });

    console.log(res);

    console.log(fetchCoCurricularActivities(), 'CoCurric');

    const history = useHistory();
    const [step, setStep] = useState(0);
    console.log(step, 'STEPP');
    const [userType, setUserType] = useState('');
    const [coActivity, setCoActivity] = useState();
    const [countryVal, setCountryVal] = useState('');
    console.log(countryVal);
    const [stateVal, setStateVal] = useState('');
    const [fullnameVal, setFullnameVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [phoneNumVal, setPhoneNumVal] = useState('');
    const [gradeVal, setGradeVal] = useState('');
    const [examVal, setExamVal] = useState('');
    const [qualificationVal, setQualificationVal] = useState('');
    const [university, setUniversity] = useState('');
    const [subjectVal, setSubjectVal] = useState([]);
    const [cocurricularActivities, setCocurricularActivities] = useState([]);
    const [pastExperience, setPastExperience] = useState('');
    const [experienceField, setExperienceField] = useState('');
    const [otpVal, setOtpVal] = useState('');

    // Time slots

    const [timeSlotMonday, setTimeSlotMonday] = useState([]);
    const [timeSlotTuesday, setTimeSlotTuesday] = useState([]);
    const [timeSlotWednesday, setTimeSlotWednesday] = useState([]);
    const [timeSlotThursday, setTimeSlotThursday] = useState([]);
    const [timeSlotFriday, setTimeSlotFriday] = useState([]);
    const [timeSlotSaturday, setTimeSlotSaturday] = useState([]);

    const mondayTimeSlots = [];
    console.log(gradeVal);

    timeSlotMonday.forEach((item) => {
        mondayTimeSlots.push(item.value);
    });

    const tuedayTimeSlots = [];

    timeSlotTuesday.forEach((item) => {
        tuedayTimeSlots.push(item.value);
    });

    const wednesdayTimeSlots = [];

    timeSlotWednesday.forEach((item) => {
        wednesdayTimeSlots.push(item.value);
    });

    const thursdayTimeSlots = [];

    timeSlotThursday.forEach((item) => {
        thursdayTimeSlots.push(item.value);
    });

    const fridayTimeSlots = [];

    timeSlotFriday.forEach((item) => {
        fridayTimeSlots.push(item.value);
    });

    const saturdayTimeSlots = [];

    timeSlotSaturday.forEach((item) => {
        saturdayTimeSlots.push(item.value);
    });

    const teacherDetails = {
        country: countryVal?.name,
        state: stateVal?.name,
        fullName: fullnameVal,
        emailID: emailVal,
        phoneNumber: phoneNumVal,
        qualification: qualificationVal?.value,
        university,
        upload: 'aaabbbss',
        grade: gradeVal?.value,
        subject: subjectVal,
        timeslot: {
            monday: [
                mondayTimeSlots,
            ],
            tuesday: [
                tuedayTimeSlots,
            ],
            wednesday: [
                wednesdayTimeSlots,
            ],
            thursday: [
                thursdayTimeSlots,
            ],
            friday: [
                fridayTimeSlots,
            ],
            saturay: [
                saturdayTimeSlots,
            ],
        },

    };

    console.log(teacherDetails);

    const [validation, setValidation] = useState({
        fullName: false,
        emailId: false,
        phoneNumber: false,
        country: false,
        state: false,
        grade: false,
        subjects: false,
        category: false,
        qualificationTeacher: false,
        universityTeacher: false,
        subjectValTeacher: false,
        gradeValTeacher: false,
        pastExperienceTeacher: false,
        timeSlotMondayTeacher: false,
        timeSlotTuesdayTeacher: false,
        timeSlotWednesdayTeacher: false,
        timeSlotThursdayTeacher: false,
        timeSlotFriddayTeacher: false,
        timeSlotSaturdayTeacher: false,

    });

    const handleRegister = () => {
        const data = {
            studentName: fullnameVal,
            userName: 'mithun.9535778823',
            email: emailVal,
            state: stateVal?.label,
            city: countryVal?.label,
            grade: gradeVal,
            cocurricularActivity: coActivity,
            examType: examVal,
            subjectsEnrolled: [
                { subject: '6108f7f6068b133284e28cc8', classCount: 70 },
            ],
            onBoardThrough: 'web',
        };

        if (userType === 'Student') {
            console.log(userType);
            registerAction(data);
        }
        if (userType === 'Teacher') {
            const response = registerTeacherAction(teacherDetails);
            console.log(response, 'RESPONSE ON TEACHER ACTION');
        }

        setStep((cur) => cur + 1);
    };

    const completeFromStep = () => {
        const emailRegex = /\S+@\S+\.\S+/;

        if (step === 1) {
            if (fullnameVal === '') {
                setValidation((prevPerson) => ({ ...prevPerson, fullName: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, fullName: false }));
            }

            if (emailRegex.test(emailVal)) {
                setValidation((prevPerson) => ({ ...prevPerson, emailId: false }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, emailId: true }));
            }

            if (phoneNumVal === '' || phoneNumVal.length < 10) {
                setValidation((prevPerson) => ({ ...prevPerson, phoneNumber: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, phoneNumber: false }));
            }

            if (phoneNumVal === '' || phoneNumVal.length < 10 || !emailRegex.test(emailVal) || phoneNumVal === '') {
                setStep(step);
            } else {
                setStep((cur) => cur + 1);
            }
        }

        if (step === 2 && userType === 'Teacher') {
            if (qualificationVal === '') {
                setValidation((prevPerson) => ({ ...prevPerson, qualificationTeacher: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, qualificationTeacher: false }));
            }

            if (university === '') {
                setValidation((prevPerson) => ({ ...prevPerson, universityTeacher: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, universityTeacher: false }));
            }

            if (qualificationVal === '' || university === '') {
                setStep(step);
            } else {
                setStep((cur) => cur + 1);
            }
        }

        if (step === 3 && userType === 'Teacher') {
            if (gradeVal === '') {
                // console.log('Invalid Grade');
                setValidation((prevPerson) => ({ ...prevPerson, gradeValTeacher: true }));
            } else {
                // console.log('Valid Grade');
                setValidation((prevPerson) => ({ ...prevPerson, gradeValTeacher: false }));
            }

            if (subjectVal.length === 0) {
                setValidation((prevPerson) => ({ ...prevPerson, subjectValTeacher: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, subjectValTeacher: false }));
            }

            if (timeSlotMonday.length === 0) {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotMondayTeacher: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotMondayTeacher: false }));
            }

            if (timeSlotTuesday.length === 0) {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotTuesdayTeacher: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotTuesdayTeacher: false }));
            }

            if (timeSlotWednesday.length === 0) {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotWednesdayTeacher: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotWednesdayTeacher: false }));
            }

            if (timeSlotThursday.length === 0) {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotThursdayTeacher: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotThursdayTeacher: false }));
            }

            if (timeSlotFriday.length === 0) {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotFridayTeacher: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotFridayTeacher: false }));
            }

            if (timeSlotFriday.length === 0) {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotSaturdayTeacher: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, timeSlotSaturdayTeacher: false }));
            }

            if (gradeVal === '' || subjectVal === [] || timeSlotMonday.length === 0
            || timeSlotTuesday.length === 0 || timeSlotWednesday.length === 0
            || timeSlotThursday.length === 0 || timeSlotFriday.length === 0
            || timeSlotSaturday.length === 0) {
                console.log('Something is not right');
                setStep(step);
            } else {
                console.log('All good');
                setStep((cur) => cur + 1);
            }
        }

        if (step === 2 && userType === 'Student') {
            if (countryVal === '') {
                setValidation((prevPerson) => ({ ...prevPerson, country: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, country: false }));
            }

            if (stateVal === '') {
                setValidation((prevPerson) => ({ ...prevPerson, state: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, state: false }));
            }

            if (gradeVal === '') {
                setValidation((prevPerson) => ({ ...prevPerson, grade: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, grade: false }));
            }

            if (subjectVal.length === 0) {
                setValidation((prevPerson) => ({ ...prevPerson, subjects: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, subjects: false }));
            }

            if (countryVal === '' || stateVal === ''
            || gradeVal === '' || subjectVal.length === 0) {
                setStep(step);
            } else {
                setStep((cur) => cur + 1);
            }
        }

        // if (step === 3) {
        //     setStep((cur) => cur + 1);
        // }
    };

    const backStep = () => {
        setStep((cur) => cur - 1);
    };

    const selectForm = () => {
        if (userType !== '') {
            setStep(1);
        }
    };

    return (

        <div className={`register-main ${step === 5 && 'success'}`}>
            <div className="container">
                {step < 5 && (
                    <div className="register-top">
                        <div className="row">

                            <div className="col-md-4 col-sm-12">
                                <Link to="/">
                                    <img className="logo" src={Logo} alt="website_log" />
                                </Link>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                {step > 0 && step < 5 && (
                                    <h2>You are registering as a <span>{userType}</span></h2>
                                )}
                            </div>
                            <div className="inline-cross">
                                {step > 0 && step < 5 && (
                                    <Link to="/">
                                        <img className="close" src={close} alt="website_log" />
                                    </Link>
                                )}
                            </div>

                        </div>
                    </div>
                )}

                {step === 0 && (
                    <div className="option-part">
                        <div className="option-part-head">
                            <h3>Sign up!</h3>
                            <p>Join our platform as one of the above</p>
                        </div>
                        <div className="text-center">
                            <RegisterOption icon={student} title="Student" setUserType={() => setUserType('Student')} userType={userType} />
                            <RegisterOption icon={parents} title="Parent" setUserType={() => setUserType('Parent')} userType={userType} />
                            <RegisterOption icon={teachers} title="Teacher" setUserType={() => setUserType('Teacher')} userType={userType} />
                            <h5 className="already-account">Already have an account? <Link to="/login">Login here</Link></h5>
                            <button type="button" disabled={userType === ''} onClick={selectForm}>Next {errowRight}</button>
                        </div>
                    </div>
                )}

                {step > 0 && step < 5 && userType !== '' && userType === 'Student'  && (
                    <div>
                        <div className="stepper-top text-center">
                            {

                                stepdata.stepdataStudent.map((data) => (
                                    <div
                                        key={data.title}
                                        className={`stepper-above ${data.id === step ? 'active' : ''} ${
                                            data.id < step ? 'prev-step' : ''
                                        }`}
                                    >
                                        <button type="button">{select}</button>
                                        <span> {data.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )}
                {step > 0 && step < 5 && userType !== '' && userType === 'Teacher'  && (
                    <div>
                        <div className="stepper-top text-center">
                            {

                                stepdata.stepdataTeacher.map((data) => (
                                    <div
                                        key={data.title}
                                        className={`stepper-above ${data.id === step ? 'active' : ''} ${
                                            data.id < step ? 'prev-step' : ''
                                        }`}
                                    >
                                        <button type="button">{select}</button>
                                        <span> {data.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )}

                {step > 0 && step < 6 && userType !== '' && (
                    <div className="step-body">

                        {step === 1 && (
                            <Mydetails
                                setFullnameVal={setFullnameVal}
                                fullnameVal={fullnameVal}
                                countryVal={countryVal}
                                validation={validation}
                                setCountryVal={setCountryVal}
                                stateVal={stateVal}
                                setStateVal={setStateVal}
                                setEmailVal={setEmailVal}
                                emailVal={emailVal}
                                phoneNumVal={phoneNumVal}
                                setPhoneNumVal={setPhoneNumVal}
                                setOtpVal={setOtpVal}
                                otpVal={otpVal}
                                userType={userType}
                            />
                        )}
                        {step === 2 && (
                            <Coursedetail
                                setCoActivity={setCoActivity}
                                countryVal={countryVal}
                                setCountryVal={setCountryVal}
                                stateVal={stateVal}
                                setStateVal={setStateVal}
                                setGradeVal={setGradeVal}
                                setExamVal={setExamVal}
                                setQualificationVal={setQualificationVal}
                                qualification={qualificationVal}
                                validation={validation}
                                subjectVal={subjectVal}
                                setSubjectVal={setSubjectVal}
                                setUniversity={setUniversity}
                                university={university}
                                userType={userType}

                            />
                        )}

                        {step === 3 && userType === 'Teacher' && (
                            <TeacherRequirements
                                setSubjectVal={setSubjectVal}
                                subjectVal={subjectVal}
                                validation={validation}
                                userType={userType}
                                setGradeVal={setGradeVal}
                                coCurricularActivities={cocurricularActivities}
                                setCoCurricularActivities={setCocurricularActivities}
                                pastExperience={pastExperience}
                                setPastExperience={setPastExperience}
                                experienceField={experienceField}
                                setExperienceField={setExperienceField}
                                setTimeSlotMonday={setTimeSlotMonday}
                                timeSlotMonday={timeSlotMonday}
                                setTimeSlotTuesday={setTimeSlotTuesday}
                                setTimeSlotWednesday={setTimeSlotWednesday}
                                setTimeSlotThursday={setTimeSlotThursday}
                                setTimeSlotFriday={setTimeSlotFriday}
                                setTimeSlotSaturday={setTimeSlotSaturday}
                                gradeVal={gradeVal}

                            />
                        )}

                        {step === 3 && userType === 'Student' &&  (
                            <PayFees />
                        )}

                        {step === 4 && userType === 'Teacher' && (<SuccessTeacher />)}
                        {step === 4 && userType === 'Student' && (<Createstudentaccount />)}

                        {step === 5 && userType === 'Student' && <Success />}

                        <div className="text-center step-btn-part">
                            {step > 1 && step < 5 && <button type="button" className="next-button" onClick={backStep}>Back</button>}
                            {step === 1 &&  <button type="button" disabled={!isOtpVerified.status} className="next-button" onClick={completeFromStep}>Next <span>{chevRight}</span> </button>}
                            {step === 2 &&  <button type="button" className="next-button" onClick={completeFromStep}>Next <span>{chevRight}</span> </button>}
                            {step === 3 &&  <button type="button" className="next-button" onClick={completeFromStep}>Next  <span>{chevRight}</span> </button>}
                            {step === 4 &&  <button type="button" className="next-button" onClick={handleRegister}>Submit <span>{chevRight}</span> </button>}
                            {step === 5 && userType === 'Student' && <button type="button" className="next-button" onClick={() => history.push('/login')}>Login To Account  <span>{chevRight}</span> </button>}
                            {step === 5 && userType === 'Teacher' && <button type="button" className="next-button" onClick={() => history.push('/')}>Go back to main screen  <span>{chevRight}</span> </button>}
                        </div>
                    </div>
                )}
            </div>

        </div>

    );
};

Register.propTypes = {
    isOtpVerified: object.isRequired,
    registerAction: func.isRequired,
    registerTeacherAction: func.isRequired,
    fetchCoCurricularActivities: func.isRequired,
};
const mapStateToProps = (state) => ({
    isOtpVerified: state.Auth.verifyOtp,
});

const mapDispatchToProps = (dispatch) => ({
    registerAction: (data) => dispatch(register(data)),
    registerTeacherAction: (data) => dispatch(registerTeacher(data)),
    sendOtpAction: (data) => dispatch(sendOtpAction(data)),
    fetchCoCurricularActivities: () => dispatch(coCurricularActivitiesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
