/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { bool, object } from 'prop-types';
import ResourceCard from './ResourceCard';
import { chevLeft, chevRight } from '../../../assets/icons/IconList';

const Resources = ({ data, showButton }) => {
    // eslint-disable-next-line no-unused-vars
    const [slide, setSlide] = useState(0);
    const slider = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        beforeChange: (_current, next) => setSlide(next),
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (

        <div className="resources-main">
            <h2>{data?.heading}</h2>

            <div className="carousel-wrap">
                {slide > 0 && <div className="prev-btn" onClick={() => slider?.current?.slickPrev()} onKeyPress={() => slider?.current?.slickPrev()} role="button" tabIndex={0}>{chevLeft}</div>}
                <Slider ref={slider} {...settings}>
                    {
                        data?.carouselcard?.map((item) => (
                            <ResourceCard data={item} />
                        ))
                    }
                </Slider>
                {slide < data?.carouselcard?.length - 2 && <div className="next-btn" onClick={() => slider?.current?.slickNext()} onKeyPress={() => slider?.current?.slickNext()} role="button" tabIndex={0}>{chevRight}</div>}
            </div>
            {showButton && (
                <div className="col-12 d-flex justify-content-center btn-div">
                    <button type="button" className="button-common-abt">
                        {data?.buttonText}
                        <span>{chevRight}</span>
                    </button>
                </div>
            )}
        </div>

    );
};
Resources.propTypes = {
    data: object,
    showButton: bool,
};

Resources.defaultProps = {
    data: {},
    showButton: true,
};
export default Resources;
