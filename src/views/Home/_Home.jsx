import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import JumpLogo from "components/LogoArea/jumpLogo.jsx";
import JumpLogoSmall from "components/LogoArea/jumpLogoSmall.jsx";
import AddEvent from 'components/AddEvent/AddEvent';

import homeStyle from "assets/jss/material-kit-react/views/Home.jsx";

// Sections for this page
import TopSection from "./Sections/TopSection.jsx";
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import SectionNotifications from "./Sections/SectionNotifications.jsx";
// import SponsorSection from "./Sections/SponsorSection.jsx";


const dashboardRoutes = [];

const logocanva = {
  textAlign: 'center'
}

class Home extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <Header
          id='navBarT'
          color="transparent"
          style={{padding:'0!important'}}
          routes={dashboardRoutes}
          brand={<JumpLogoSmall />}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 600,
            color: "dark"
          }}
          {...rest}
        />
      <Parallax id="paraBod" filter image={require("assets/img/bg7.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={12}
                md={12}
                style={logocanva}
                >
                <JumpLogo />
                <h2 style={{color:'#fff'}}>
                  Tu actitud define tu futuro.
                </h2>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TopSection />
          </div>
            <SectionNotifications />
          <div className={classes.container}>
            <ProductSection />
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={12}
                    md={12}
                  >
                  <WorkSection />
                  </GridItem>
                </GridContainer>
            </div>
          </div>
          <Footer />
          <AddEvent />
        </div>
        );
      }
    }

export default withStyles(homeStyle)(Home);
