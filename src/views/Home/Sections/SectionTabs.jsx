import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Info from "@material-ui/icons/Info";
import Dashboard from "@material-ui/icons/Dashboard";
import LiveHelp from "@material-ui/icons/LiveHelp";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Faq from "components/Faq/Faq.jsx";
import JuradoCard from "components/JuradoCard/JuradoCard.jsx";
import tabsStyle from "assets/jss/material-kit-react/views/homeSections/tabsStyle.jsx";

class SectionTabs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="nav-tabs">
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h3>
                  <small>Información sobre el evento</small>
                </h3>
                <CustomTabs
                  headerColor="success"
                  onClick={console.log(this.state)}
                  tabs={[
                    {
                      tabName: "Agenda",
                      tabIcon: Dashboard,
                      tabContent: (
                        <p className={classes.textCenter}>

                        </p>
                      )
                    },
                    {
                      tabName: "Jurado",
                      tabIcon: Face,
                      tabContent: (
                        <p className={classes.textCenter}>
                          here
                        </p>
                      )
                    },
                    {
                      tabName: "¿FAQ?",
                      tabIcon: LiveHelp,
                      tabContent: (
                        <div className={classes.textCenter}>
                          <Faq />
                      </div>
                      )
                    },
                    {
                      tabName: "Info",
                      tabIcon: Info,
                      tabContent: (
                        <p className={classes.textCenter}>

                        </p>
                      )
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(tabsStyle)(SectionTabs);
