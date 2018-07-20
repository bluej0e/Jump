import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';

import { Avatar, Icon, Zoom, Tooltip, ClickAwayListener } from '@material-ui/core';

import timeLineStyle from 'assets/jss/material-kit-react/components/timeLineStyle';

const agenda = [
  {
    title: 'Apertura',
    time: '9:00 a 9:40',
    text: 'Palabras de Autoridad Estatal',
    icon: 'alarm_on',
    color: '#e91e63',
    clase: 'icoRose',
  },
  {
    title: 'Conferencia 1',
    time: '9:40 a 10:20',
    text: '',
    icon: 'record_voice_over',
    color: '#00acc1',
    clase: 'icoBlue',
  },
  {
    title: 'Coffee break',
    time: '10:20 a 10:40',
    text: '',
    icon: 'local_drink',
    color: '#9c27b0',
    clase: 'icoPurp',
  },
  {
    title: 'Espacio emprendedores',
    time: '10:40 a 12:10',
    text: 'Pitch en vivo de 4 emprendedores ante jurado y audiencia. Ambas partes votarán por una idea y la elegida por mayoría recibirá asesoramiento gratuito',
    icon: 'store',
    color: '#4caf50',
    clase: 'icoGreen',
  },
  {
    title: 'Conferencia 2',
    time: '12:10 a 13:00',
    text: '',
    icon: 'record_voice_over',
    color: '#00acc1',
    clase: 'icoBlue',
  },
  {
    title: 'Almuerzo / Paseo Stands',
    time: '13:00 a 13:50',
    text: '',
    icon: 'restaurant',
    color: '#9c27b0',
    clase: 'icoPurp',
  },
  {
    title: 'Conferencia 3',
    time: '13:50 a 14:30',
    text: '',
    icon: 'record_voice_over',
    color: '#00acc1',
    clase: 'icoBlue',
  },
  {
    title: 'Entrevista (Es cuestión de actitud)',
    time: '14:30 a 14:50',
    text: '',
    icon: 'forum',
    color: '#4caf50',
    clase: 'icoGreen',
  },
  {
    title: 'Conferencia 4',
    time: '14:50 a 15:30',
    text: '',
    icon: 'record_voice_over',
    color: '#00acc1',
    clase: 'icoBlue',
  },
  {
    title: 'Coffee Break / Paseo stands',
    time: '15:30 a 15:50',
    text: '',
    icon: 'local_drink',
    color: '#9c27b0',
    clase: 'icoPurp',
  },
  {
    title: 'Panel conferencistas',
    time: '16:10 a 16:40',
    text: '',
    icon: 'account_circle',
    color: '#4caf50',
    clase: 'icoGreen',
  },
  {
    title: 'Sorteos, Anuncio idea ganadora y despedida',
    time: '16:40 a 17:00',
    text: '',
    icon: 'card_giftcard',
    color: '#e91e63',
    clase: 'icoRose',
  }
];

const icons = {
  icoGreen:{
    backgroundColor:'#4caf50',
  },
  icoBlue:{
    backgroundColor:'#00acc1',
  },
  icoRed:{
    backgroundColor:'',
  },
  icoPurp:{
    backgroundColor:'#9c27b0',
  },
  icoRose:{
    backgroundColor:'#e91e63',
  },
}

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { agenda };
  }
  render() {
    const { classes, timeLineStyle } = this.props;
    return (
      <div className={classes.content}>
        {this.state.agenda.map((i, n) => (
            i.text !== '' ? (
              <Tooltip disableFocusListener title={i.text} TransitionComponent={Zoom} key={n}>
                <div style={{borderColor: i.color}} className={classes.agendaRow} key={n}>
                  <Avatar style={{backgroundColor:i.color}} className={classes.icon}><Icon>{i.icon}</Icon></Avatar>
                  <div className={classes.title}>{i.title}</div>
                  <Icon style={{order:'3', color:'#999'}}>info</Icon>
                  <div className={classes.time}>{i.time}</div>
                </div>
              </ Tooltip>
            ) : (
              <div style={{borderColor: i.color}} className={classes.agendaRow} key={n}>
                <Avatar style={{backgroundColor:i.color}} className={classes.icon}><Icon>{i.icon}</Icon></Avatar>
                <div className={classes.title}>{i.title}</div>
                <div className={classes.time}>{i.time}</div>
              </div>
            )
          ))}
      </div>
    )
  }
}
TimeLine.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(timeLineStyle)(TimeLine);
