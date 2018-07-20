import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/DateRange';
import Tooltip from '@material-ui/core/Tooltip';


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    position: 'relative',
    zIndex:999
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;


    const fab = {
        color: 'secondary',
        className: classes.fab,
        icon: <EditIcon />,
      }


    return (
      <div className={classes.root}>
          <Tooltip id="tooltip-fab" title="Agendar">
            <a  href='#contact'>
              <Button variant="fab" className={fab.className} color={fab.color}>
                {fab.icon}
              </Button>
            </a>
          </Tooltip>
      </div>
    );
  }
}

FloatingActionButtonZoom.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FloatingActionButtonZoom);
