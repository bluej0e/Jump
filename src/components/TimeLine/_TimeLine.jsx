import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

import { withStyles } from '@material-ui/core/styles';
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SpeakerSocial from "components/SpeakerCard/SpeakerSocial.jsx";


import peopleList from 'components/peopleList/peopleList';
import timeLineStyle from 'assets/jss/material-kit-react/components/timeLineStyle';



const agendaArray = [
  {
    icon:'',
    time: '9:00 a 9:40',
    activity: 'Apertura (palabras de Autoridad Estatal)'
  },
  {
    icon:'',
    time: '9:40 a 10:20',
    activity: 'Conferencia 1'
  },
  {
    icon:'',
    time: '10:20 a 10:40 ',
    activity: 'Coffee break'
  },
  {
    icon:'',
    time: '10:40 a 12:10',
    activity: 'Espacio emprendedores (Pitch en vivo de 4 emprendedores ante jurado y audiencia. Ambas partes votarán por una idea y la elegida por mayoría recibirá asesoramiento gratuito).'
  },
  {
    icon:'',
    time: '12:10 a 13:00',
    activity: 'Conferencia 2'
  },
  {
    icon:'',
    time: '13:00 a 13:50',
    activity: 'Almuerzo / Paseo Stands'
  },
  {
    icon:'',
    time: '13:50 a 14:30',
    activity: 'Conferencia 3'
  },
  {
    icon:'',
    time: '14:30 a 14:50',
    activity: 'Entrevista (Es cuestión de actitud)'
  },
  {
    icon:'',
    time: '14:50 a 15:30',
    activity: 'Conferencia 4'
  },
  {
    icon:'',
    time: '15:30 a 15:50',
    activity: 'Coffee Break / Paseo stands'
  },
  {
    icon:'',
    time: '16:10 a 16:40',
    activity: 'Panel conferencistas'
  },
  {
    icon:'',
    time: '16:40 a 17:00 ',
    activity: 'Sorteos, Anuncio idea ganadora y despedida'
  },
]


class TimeLine extends React.Component {
  constructor(props) {
    super(props);
      this.state = { agendaArray };
  }
  render() {
    const { classes, timeLineStyle } = this.props;
    return (
        <div className={classes.container} >
            <GridItem cxs={12} sm={12} md={10} lg={8}>
              <ul className={classes.timeline}>{
                  this.state.agendaArray.map((item, index) => (
                    <li key={item.time} className={classes.timelineEvent} data-date={item.time}>
                      <span className={classes.tlItem}>{item.activity}</span>
                    </li>
                    )
                  )
                }
            </ul>
        </GridItem>
      </div>
    )
  }
}

TimeLine.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(timeLineStyle)(TimeLine);
