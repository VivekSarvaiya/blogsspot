"use client"
import React, { useEffect, useState } from 'react'
import PostGallary from '../Posts/PostGallary'

function index() {

    const [slide, setSlide] = useState(1)

    const next = () => {
        slide !== 3 ? setSlide(slide + 1) : setSlide(1)
    }
    const previous = () => {
        slide !== 1 ? setSlide(slide - 1) : setSlide(3)
    }

    return (
        <>
            <section id="hero" className="s-hero">

                <div className="s-hero__slider">

                    <div className="s-hero__slide" style={{ display: slide === 1 ? "" : "none" }} >

                        <div className="s-hero__slide-bg" style={{ backgroundImage: "url('../assets/images/slide1-bg-3000.jpg')" }}></div>

                        <div className="row s-hero__slide-content ">
                            <div className="column">
                                <div className="s-hero__slide-meta">
                                    <span className="cat-links">
                                        <a >Lifestyle</a>
                                    </span>
                                    <span className="byline">
                                        Posted by
                                        <span className="author">
                                            <a > Jonathan Doe</a>
                                        </span>
                                    </span>
                                </div>
                                <h1 className="s-hero__slide-text">
                                    <a >
                                        Tips and Ideas to Help You Start Freelancing.
                                    </a>
                                </h1>
                            </div>
                        </div>

                    </div>

                    <div className="s-hero__slide" style={{ display: slide === 2 ? "" : "none" }}>

                        <div className="s-hero__slide-bg" style={{ backgroundImage: "url('../assets/images/slide2-bg-3000.jpg')" }}></div>

                        <div className="row s-hero__slide-content ">
                            <div className="column">
                                <div className="s-hero__slide-meta">
                                    <span className="cat-links">
                                        <a >Work</a>
                                    </span>
                                    <span className="byline">
                                        Posted by
                                        <span className="author">
                                            <a >Juan Dela Cruz</a>
                                        </span>
                                    </span>
                                </div>
                                <h1 className="s-hero__slide-text">
                                    <a >
                                        Minimalism: The Art of Keeping It Simple.
                                    </a>
                                </h1>
                            </div>
                        </div>

                    </div>

                    <div className="s-hero__slide" style={{ display: slide === 3 ? "" : "none" }} >

                        <div className="s-hero__slide-bg" style={{ backgroundImage: "url('../assets/images/slide3-bg-3000.jpg')" }}></div>

                        <div className="row s-hero__slide-content ">
                            <div className="column">
                                <div className="s-hero__slide-meta">
                                    <span className="cat-links">
                                        <a >Health</a>
                                        <a >Lifestyle</a>
                                    </span>
                                    <span className="byline">
                                        Posted by
                                        <span className="author">
                                            <a >Jane Doe</a>
                                        </span>
                                    </span>
                                </div>
                                <h1 className="s-hero__slide-text">
                                    <a >
                                        10 Reasons Why Being in Nature Is Good For You.
                                    </a>
                                </h1>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="s-hero__social hide-on-mobile-small">
                    <p>Follow</p>
                    <span></span>
                    <ul className="s-hero__social-icons">
                        <li><a ><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                        <li><a ><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a ><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a ><i className="fab fa-pinterest" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className="nav-arrows s-hero__nav-arrows">
                    <button className="s-hero__arrow-prev" onClick={previous}>
                        <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" width={15} height={15}>
                            <path d="M1.5 7.5l4-4m-4 4l4 4m-4-4H14" stroke="currentColor" />
                        </svg>
                    </button>
                    <button className="s-hero__arrow-next" onClick={next}>
                        <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" width={15} height={15}>
                            <path d="M13.5 7.5l-4-4m4 4l-4 4m4-4H1" stroke="currentColor" />
                        </svg>
                    </button>
                </div>
            </section>

            <PostGallary />
        </>
    )
}

export default index