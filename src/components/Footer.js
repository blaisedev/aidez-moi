import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import {Link} from "./../util/router.js";
import "./Footer.scss";
import "./d.css"

function Footer(props) {
    return (
        <Section
            bg={props.bg}
            textColor={props.textColor}
            size={props.size}
            bgImage={props.bgImage}
            bgImageOpacity={props.bgImageOpacity}
            className="footer"
        >
            <Container>
                <div className="FooterComponent__inner">
                    <div className="brand left">
                        <Link to="/">
                            <div className="footer-logo">
                                <span style={{color: 'blue'}}>AI</span><span style={{color: 'white'}}>D</span><span
                                style={{color: 'red'}}>EZ</span>
                                <span style={{color: 'black'}}>-</span>
                                <span style={{color: 'green'}}>M</span><span style={{color: 'white'}}>O</span><span
                                style={{color: 'orange'}}>I</span>
                            </div>
                        </Link>
                    </div>
                    <div className="links right">
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/testimonial">Testimonial</Link>
                        {/*<a*/}
                        {/*target="_blank"*/}
                        {/*href="https://medium.com"*/}
                        {/*rel="noopener noreferrer"*/}
                        {/*>*/}
                        {/*Blog*/}
                        {/*</a>*/}
                    </div>
                    <div className="social right">
                        {/*<a*/}
                        {/*href="https://twitter.com"*/}
                        {/*target="_blank"*/}
                        {/*rel="noopener noreferrer"*/}
                        {/*>*/}
                        {/*<span className="icon">*/}
                        {/*<i className="fab fa-twitter"/>*/}
                        {/*</span>*/}
                        {/*</a>*/}
                        <a
                            href="https://www.facebook.com/pages/category/Product-Service/Aidez-moi-102154724478991/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
              <span className="icon">
                <i className="fab fa-facebook-f"/>
              </span>
                        </a>
                        {/*<a*/}
                        {/*href="https://instagram.com"*/}
                        {/*target="_blank"*/}
                        {/*rel="noopener noreferrer"*/}
                        {/*>*/}
                        {/*<span className="icon">*/}
                        {/*<i className="fab fa-instagram"/>*/}
                        {/*</span>*/}
                        {/*</a>*/}
                    </div>
                    <div className="copyright left">{props.copyright}</div>
                </div>
            </Container>
        </Section>
    );
}

export default Footer;
