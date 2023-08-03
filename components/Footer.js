import React from 'react'

function Footer() {
    return (
        <>
            <footer className="s-footer">
                <div className="s-footer__main">
                    <div className="row">
                        <div className="column large-3 medium-6 tab-12 s-footer__info">
                            <h5>About Our Site</h5>
                            <p>
                                Lorem ipsum Ut velit dolor Ut labore id fugiat in ut
                                fugiat nostrud qui in dolore commodo eu magna Duis
                                cillum dolor officia esse mollit proident Excepteur
                                exercitation nulla. Lorem ipsum In reprehenderit
                                commodo aliqua irure.
                            </p>
                        </div>
                        <div className="column large-2 medium-3 tab-6 s-footer__site-links">
                            <h5>Site Links</h5>
                            <ul>
                                <li><a href="#0">About Us</a></li>
                                <li><a href="#0">Blog</a></li>
                                <li><a href="#0">FAQ</a></li>
                                <li><a href="#0">Terms</a></li>
                                <li><a href="#0">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="column large-2 medium-3 tab-6 s-footer__social-links">
                            <h5>Follow Us</h5>
                            <ul>
                                <li><a href="#0">Twitter</a></li>
                                <li><a href="#0">Facebook</a></li>
                                <li><a href="#0">Dribbble</a></li>
                                <li><a href="#0">Pinterest</a></li>
                                <li><a href="#0">Instagram</a></li>
                            </ul>
                        </div>
                        <div className="column large-3 medium-6 tab-12 s-footer__subscribe">
                            <h5>Sign Up for Newsletter</h5>
                            <p>Signup to get updates on articles, interviews and events.</p>
                            <div className="subscribe-form">
                                <form id="mc-form" className="group" noValidate="{true}">
                                    <input type="email" name="dEmail" className="email" id="mc-email" placeholder="Your Email Address" required />
                                    <input type="submit" name="subscribe" defaultValue="subscribe" />
                                    <label htmlFor="mc-email" className="subscribe-message" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-footer__bottom">
                    <div className="row">
                        <div className="column">
                            <div className="ss-copyright">
                                <span>© Copyright Calvin 2020</span>
                                <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="ss-go-top">
                        <a className="smoothscroll" title="Back to Top" href="#top">
                            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={15} height={15}>
                                <path d="M7.5 1.5l.354-.354L7.5.793l-.354.353.354.354zm-.354.354l4 4 .708-.708-4-4-.708.708zm0-.708l-4 4 .708.708 4-4-.708-.708zM7 1.5V14h1V1.5H7z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer