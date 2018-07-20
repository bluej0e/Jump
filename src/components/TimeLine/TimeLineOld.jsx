import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

import { Timeline } from 'react-material-timeline';
import { Avatar, Icon } from '@material-ui/core';



const agendaArray = [
  {
    title: 'Apertura',
    subheader: '9:00 a 9:40',
    description: [ 'palabras de Autoridad Estatal' ],
    icon: <Avatar><Icon>alarm_on</Icon></Avatar>,
  },
  {
    title: 'Conferencia 1',
    subheader: '9:40 a 10:20',
    description: [ '' ],
    icon: <Avatar><Icon>record_voice_over</Icon></Avatar>,
  },
  {
    title: 'Coffee break',
    subheader: '10:20 a 10:40',
    description: [ '' ],
    icon: <Avatar><Icon>local_drink</Icon></Avatar>,
  },
  {
    title: 'Espacio emprendedores',
    subheader: '10:40 a 12:10',
    description: [ 'Pitch en vivo de 4 emprendedores ante jurado y audiencia. Ambas partes votarán por una idea y la elegida por mayoría recibirá asesoramiento gratuito' ],
    icon: <Avatar><Icon>store</Icon></Avatar>,
  },
  {
    title: 'Conferencia 2',
    subheader: '12:10 a 13:00',
    description: [ '' ],
    icon: <Avatar><Icon>record_voice_over</Icon></Avatar>,
  },
  {
    title: 'Almuerzo / Paseo Stands',
    subheader: '13:00 a 13:50',
    description: [ '' ],
    icon: <Avatar><Icon>restaurant</Icon></Avatar>,
  },
  {
    title: 'Conferencia 3',
    subheader: '13:50 a 14:30',
    description: [ '' ],
    icon: <Avatar><Icon>record_voice_over</Icon></Avatar>,
  },
  {
    title: 'Entrevista (Es cuestión de actitud)',
    subheader: '14:30 a 14:50',
    description: [ '' ],
    icon: <Avatar><Icon>forum</Icon></Avatar>,
  },
  {
    title: 'Conferencia 4',
    subheader: '14:50 a 15:30',
    description: [ '' ],
    icon: <Avatar><Icon>record_voice_over</Icon></Avatar>,
  },
  {
    title: 'Coffee Break / Paseo stands',
    subheader: '15:30 a 15:50',
    description: [ '' ],
    icon: <Avatar><Icon>local_drink</Icon></Avatar>,
  },
  {
    title: 'Panel conferencistas',
    subheader: '16:10 a 16:40',
    description: [ '' ],
    icon: <Avatar><Icon>account_circle</Icon></Avatar>,
  },
  {
    title: 'Sorteos, Anuncio idea ganadora y despedida',
    subheader: '16:40 a 17:00',
    description: [ '' ],
    icon: <Avatar><Icon>card_giftcard</Icon></Avatar>,
  }
]


class TimeLine extends React.Component {
  render() {
    return (
      <Timeline events={agendaArray} />
    )
  }
}

export default TimeLine;
