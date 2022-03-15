/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Layout from '../../../Layout/Layout';
import STRAPI_URL from '../../../constants/strapi';
import Subjectlist from '../home/Subjectlist';
import Banner from '../AboutUsTeacher/Banner';
import './about.scss';
import SectionLeftRight from './SectionLeft-Right';
import TabGroup from './TabGroup';
import ParentTestimonials from './ParentTestimonials';

const About = () => {
    const [subjects, setSubjects] = useState([]);
    const [aboutData, setAboutData] = useState([]);

    const fetchSubjects = async () => {
        const activityRes = await fetch(
            `${STRAPI_URL}/api/subjects?populate=*`,
        );
        const res = await fetch(
            `${STRAPI_URL}/api/about?populate=*`,
        );
        const activityData = await activityRes.json();
        // eslint-disable-next-line max-len
        setSubjects(activityData?.data);
        const data = await res.json();
        setAboutData(data?.data?.attributes);
    };

    useEffect(() => {
        fetchSubjects();
    }, []);

    return (
        <Layout>
            <Subjectlist subjects={subjects} />
            <Banner banner={aboutData?.banner} />
            <h2 className="why-h2 text-center">Why does your kid need TautMore?</h2>
            <SectionLeftRight className="section-main" fromLeft />
            <SectionLeftRight className="section-main" />
            <SectionLeftRight className="section-main" fromLeft />
            <SectionLeftRight className="section-main" />
            <SectionLeftRight className="section-main" fromLeft />
            <SectionLeftRight className="section-main" />
            <h2 className="why2-h2">Why do you need TautMore as a parent?</h2>
            <div className="section-wrap-bg">
                <SectionLeftRight className="section-main" fromLeft />
                <SectionLeftRight className="section-main" />
                <TabGroup />
            </div>
            <ParentTestimonials />
        </Layout>
    );
};

export default About;