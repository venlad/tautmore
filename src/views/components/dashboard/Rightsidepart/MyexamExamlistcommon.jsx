import React, { useState } from 'react';
import {  object, string } from 'prop-types';
import examlisthand from '../../../../assets/images/examlisthand.png';
import examlisthandhover from '../../../../assets/images/examlisthover1.png';
import examlistidea from '../../../../assets/images/examlistidea.png';
import examlistideahover from '../../../../assets/images/examlisthover2.png';
import examlistclipboard from '../../../../assets/images/examlistclipboard.png';
import examlistclipboardhover from '../../../../assets/images/examlisthover3.png';
import examlistglass from '../../../../assets/images/examlistglass.png';
import examlistglasshover from '../../../../assets/images/examlisthover4.png';
import MyexamAnswer from './MyexamAnswer';
import { formatDate, formatTime, formatTimeSectoMin } from '../../../../helpers/utility';

const MyexamExamlistcommon = ({ val, setStartExam }) => {
    const [handimg, setHandimg] = useState(examlisthand);
    const [ideaimg, setIdeaimg] = useState(examlistidea);
    const [clipboardimg, setClipboardimg] = useState(examlistclipboard);
    const [glassimg, setGlassimg] = useState(examlistglass);
    const [exam, setExam] = useState(false);
    const [prevExamId, setPrevExamId] = useState('');
    const openMyExamAnsPopup = (id) => {
        setPrevExamId(id);
        setExam(!exam);
    };
    return (
        <div>

            <div
                className="examlist-common"
                onMouseEnter={
                    () => {
                        setHandimg(examlisthandhover);
                        setIdeaimg(examlistideahover);
                        setClipboardimg(examlistclipboardhover);
                        setGlassimg(examlistglasshover);
                    }
                }
                onMouseLeave={
                    () => {
                        setHandimg(examlisthand);
                        setIdeaimg(examlistidea);
                        setClipboardimg(examlistclipboard);
                        setGlassimg(examlistglass);
                    }
                }
                onClick={() => openMyExamAnsPopup(val?._id)}
                aria-hidden="true"
            >
                <div className="row examlist-common-one">
                    <div className="col-md-3 col-sm-5">
                        <p><span>Grade 2</span> - <span className="span-bold">{val?.examInfo?.name}</span></p>
                    </div>
                    <div className="col-md-7 col-sm-7 examlist-common-date-time ">
                        <p><span>Date & time</span> - <span className="span-bold">{formatDate(val?.startedOn)} - {formatTime(val?.startedOn)}</span></p>
                    </div>
                    <div className="col-md-2 col-sm-12 examlist-last">
                        <li>view details</li>
                    </div>
                </div>
                <div className="row examlist-common-two">
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlisthand">
                                <img
                                    src={handimg}
                                    alt="examlisthand"
                                />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Total score</p>
                                <h5>{val?.marksObtained} Points</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlistidea">
                                <img src={ideaimg} alt="examlistidea" />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Accurancy</p>
                                <h5>{val?.accuracy} %</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlistclipboard">
                                <img src={clipboardimg} alt="examlisthand" />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Right answers</p>
                                <h5>{val?.rightAnswers} out of {val?.totalAnsweredQuestions} </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 examlist-common-bottom">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 examlistglass">
                                <img src={glassimg} alt="examlisthand" />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p>Time taken</p>
                                <h5>{val?.timeTakenInSecs ? formatTimeSectoMin(val?.timeTakenInSecs) : '00:00'} (Minutes)</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                exam && (
                    <MyexamAnswer
                        setStartExam={setStartExam}
                        setExam={setExam}
                        prevExamId={prevExamId}
                    />
                )
            }

        </div>
    );
};

MyexamExamlistcommon.propTypes = {
    val: object.isRequired,
    setStartExam: string.isRequired,
};

export default MyexamExamlistcommon;
