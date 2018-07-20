import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Schedule from "@material-ui/icons/Schedule";
import Face from "@material-ui/icons/Face";
import Info from "@material-ui/icons/Info";
import LiveHelp from "@material-ui/icons/LiveHelp";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Faq from "components/Faq/Faq.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/homeSections/pillsStyle.jsx";
import JuradoCard from "components/JuradoCard/JuradoCard.jsx";
import TimeLine from 'components/TimeLine/TimeLine';
import InfoBox from 'components/InfoBox/InfoBox';


function ColorChanger(){
  let colorOptions = ['danger','success', 'primary', 'warning', 'info', 'rose'];
  let show = colorOptions[Math.floor(Math.random() * colorOptions.length)];
  return show;
}

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="info" className={classes.section}>
        <h2 className={classes.title}>Información</h2>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer>
              <GridItem xs={12}>
                <NavPills
                  color={ColorChanger()}
                  tabs={[{
                    tabButton: 'Agenda',
                    tabIcon: Schedule,
                    tabContent:(
                      <TimeLine />
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
                        <InfoBox />
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
