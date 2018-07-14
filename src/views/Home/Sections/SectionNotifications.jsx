import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import InfoOutline from "@material-ui/icons/InfoOutline";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import notificationsStyles from "assets/jss/material-kit-react/views/homeSections/notificationsStyles.jsx";

class SectionNotifications extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="notifications">
        <SnackbarContent
          message={
            <span>
              <b>AVISO:</b> Las inscripciones aún no están abiertas. <a style={{color:'white'}} href="#"><strong>Registrate</strong></a> para mantenerte informado y no perder tu lugar!
            </span>
          }
          close
          color="success"
          icon={InfoOutline}
        />
        <Clearfix />
      </div>
    );
  }
}

export default withStyles(notificationsStyles)(SectionNotifications);
