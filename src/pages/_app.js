import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import PricingPage from "./pricing";
import ContactPage from "./contact";
import {Route, Router, Switch} from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import TestimonialPage from "./testimonial";

function App(props) {
    return (
        <Router>
            <>
                <NavbarCustom
                    bg="white"
                    variant="light"
                    expand="md"
                    logo="https://uploads.divjoy.com/logo.svg"
                />

                <Switch>
                    <Route exact path="/" component={IndexPage}/>

                    <Route exact path="/about" component={AboutPage}/>

                    <Route exact path="/pricing" component={PricingPage}/>

                    <Route exact path="/contact" component={ContactPage}/>

                    <Route exact path="/testimonial" component={TestimonialPage}/>

                    <Route component={NotFoundPage}/>
                </Switch>

                <Footer
                    bg="light"
                    textColor="dark"
                    size="sm"
                    bgImage=""
                    bgImageOpacity={1}
                    description="A short description of what you do here"
                    copyright="© 2019 Company"
                    logo="https://uploads.divjoy.com/logo.svg"
                />
            </>
        </Router>
    );
}

export default App;
