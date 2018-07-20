import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '80%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Faq extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div style={{padding:'5px'}} className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><em>El evento es gratuito?</em></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Si, es gratuito para todos los participantes. Para asistir solamente debes registrarte, estate atento! LOS CUPOS SON LIMITADOS!
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><em>Tengo que registrarme para ir al evento?</em></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Si. El registro aun no se abrio, pero lo hará pronto! Por eso es importante que te suscribas al newsletter. Por allí te estaremos avisando cuando se abren las inscripciones para que no te quedes sin cupos.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><em>Que pasa si me registro y no puedo asistir?</em></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lo importante es avisar. No pasa nada si no puedes asistir al evento, pero recorda que tenes un lugar reservado, y hay gente que quedó en lista de espera, avisanos para poder darle tu lugar a alguien más.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><em>Cómo puedo presentar mi idea y hacer el PITCH?</em></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Es fácil, para presentar tu idea tienes que grabar un video de 30 segundos contando brevemente tu idea y subirlo a tu cuenta de Youtube. luego nos envias el link del video por mail a: XXXXX@Direccion de mail. Nosotros lo evaluaremos y lo subiremos a la web oficial para que las personas voten. Los 4 vídeos más votados serán los que expondrán el día del evento.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><em>Que debe tener mi video de 30 segundos?</em></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Tu video puede tener lo que quieras, imagenes, una persona o un equipo hablando, personas disfrazadas, lo que quieras! Recorda que al final, van a exponer los 4 videos más votados, así que hace tu mejor esfuerzo y apunta a ganar!
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><em>Cuanto tiempo dura el PITCH el dia del evento?</em></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Si lograste ser una de las 4 ideas expositoras, vas a tener 10 minutos para exponer.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><em>Que puedo hacer durante mi Pitch el dia del evento?</em></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
             Lo que quieras, el escenario es tuyo durante 10 minutos. Lo que tenes que tener en cuenta es que tenes que lograr que el jurado y las personas voten por tu idea y no las otras.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel8'} onChange={this.handleChange('panel8')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><em>Que va a evaluar el jurado?</em></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              El jurado va a evaluar TODO: La idea de negocio, rentabilidad, investigación que se haya realizado, calidad de la presentación, actitud, el speech, creatividad de presentación, etc.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Faq.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Faq);
