import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Info from "@material-ui/icons/Info";
import LiveHelp from "@material-ui/icons/LiveHelp";
import peopleList from 'components/peopleList/peopleList';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Faq from "components/Faq/Faq.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/homeSections/pillsStyle.jsx";
import JuradoCard from "components/JuradoCard/JuradoCard.jsx";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Jurado</h2>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer>
              <GridItem xs={12}>
                <NavPills
                  color="success"
                  tabs={[{
                    tabButton: 'Agenda',
                    tabIcon: Schedule,
                    tabContent:(
                      <span>ascasc</span>
                    )
                  },
                  {
                    tabButton: 'Jurado',
                    tabIcon: Face,
                    tabContent:(
                          <JuradoCard />
                    )
                  },
                  {
                    tabButton: '¿FAQ?',
                    tabIcon: LiveHelp,
                    tabContent:(
                            <Faq />
                      )
                    },
                    {
                      tabButton: 'Info',
                      tabIcon: Info,
                      tabContent:(
                        <span>ascasc</span>
                      )}
                    ]
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
