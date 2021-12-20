import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
    object, bool, string, number, array, func, shape, arrayOf,
} from 'prop-types';
import SubtopicDesc from './subtopicDesc';

const Topiclist = ({
    topic,
    topicIdx,
    viewMoreTopic,
    idx,
    descriptionAnchor,
    setDescriptionAnchor,
    descRef,
    shouldToggleStyle,
    setViewMoreTopic,
}) => {
    const [desktop, setDesktop] = useState(true);
    const handleResize = () => {
        if (window.innerWidth < 992) {
            setDesktop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        if (window.innerWidth < 992) {
            setDesktop(false);
        }
    });

    return (
        <li>
            <span>
                {`${String.fromCharCode(65 + topicIdx)}.`} {topic.name} {topicIdx + 1}
            </span>
            <ul>
                {topic.topics.map((subTopic, subIdx) => (
                    subIdx <= 3 || (viewMoreTopic[0] === idx && viewMoreTopic[1] === topicIdx)) && (
                    <li key={`sub_${uuid()}`}>
                        <div
                            role="button"
                            tabIndex={0}
                            onMouseEnter={() => (desktop
                                ? setDescriptionAnchor([idx, topicIdx, subIdx]) : '')}
                            onMouseLeave={() => (desktop
                                ? setDescriptionAnchor([idx, topicIdx, subIdx]) : '')}
                            onClick={() => (!desktop
                                ? setDescriptionAnchor([idx, topicIdx, subIdx]) : '')}
                            onKeyDown={() => (!desktop
                                ? setDescriptionAnchor([idx, topicIdx, subIdx]) : '')}
                            className="sub-topic-div"
                        >
                            {`${String.fromCharCode(65 + topicIdx)}.${subIdx + 1}`}
                            {subTopic} {subIdx + 1}
                            <SubtopicDesc
                                isShow={
                                    descriptionAnchor[0] === idx
                                 && descriptionAnchor[1] === topicIdx
                                 && descriptionAnchor[2] === subIdx
                                }
                                ref={descRef}
                                shouldToggleStyle={shouldToggleStyle}
                                index={`${idx}_${topicIdx}_${subIdx}`}
                            />
                        </div>

                    </li>
                ))}
                {topic.topics.length > 4 && (
                    <li
                        className={`view-more ${
                            viewMoreTopic[0] === idx && viewMoreTopic[1] === topicIdx
                                ? 'hide'
                                : ''
                        }`}
                    >
                        <button
                            className={`view-more ${
                                viewMoreTopic[0] === idx && viewMoreTopic[1] === topicIdx
                                    ? 'hide'
                                    : ''
                            }`}
                            onClick={() => setViewMoreTopic([idx, topicIdx])}
                            type="button"
                        >  View more
                        </button>
                    </li>
                )}
            </ul>
        </li>
    );
};

Topiclist.propTypes = {
    topic: shape({
        key: string.isRequired,
        name: string.isRequired,
        topics: arrayOf(string.isRequired),
    }).isRequired,
    topicIdx: number.isRequired,
    viewMoreTopic: array.isRequired,
    idx: number.isRequired,
    descriptionAnchor: array.isRequired,
    setDescriptionAnchor: func.isRequired,
    descRef: object.isRequired,
    shouldToggleStyle: bool.isRequired,
    setViewMoreTopic: func.isRequired,

};
export default Topiclist;
