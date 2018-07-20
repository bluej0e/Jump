import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Icon  } from '@material-ui/core';
import infoBoxStyles from "assets/jss/material-kit-react/components/infoBoxStyles.jsx";

// core components





import SpeakerSocial from "components/SpeakerCard/SpeakerSocial.jsx";

import GoogleMapReact from 'google-map-react';

import bochardgroup from 'assets/img/logos/bochardgroup.svg';
import jumpLogo from 'assets/img/logos/jumpLogo.svg';


const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: '#333',
    height:'65px',
    width:'65px',
    padding: '10px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
  <img height="50px" width="50px" src={text} alt={text} />
  </div>
);
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

class InfoBox extends React.Component {
  constructor(props) {
    super(props);

  const links = {
    site: 'http://www.bochardgroup.com',
    facebook: 'https://www.facebook.com/bochardgroup',
    instagram: 'https://www.instagram.com/bochardgroup'
  };
  this.state = { links };
}
static defaultProps = {
  center: {lat: -34.891944, lng: -56.194722},
  zoom: 14
};

  render() {
    const { classes , links } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.infoArea}>
          <div className={classes.textArea}>
            <h3 className={classes.titu}>JUMP! es una Creación de Bochard Group:</h3>
            <p>Bochard Group es la Consultora de Marketing que se dedica a encontrar la esencia de cada marca, eso que la hace única, para ayudar a que cada negocio alcance su máximo potencial.</p>
<p>Desde su comienzo trabaja con PYMES, lo que le permitió entender las dificultades que transitan los dueños de las empresas cuando comienzan, y por eso crea Jump!</p>
<p>Evento sin fines de lucro que surge como forma de apoyar el ecosistema emprendedor y las pequeñas empresas.</p>
<p>Con entrada 100% gratuita para los participantes, es el primer evento que pone realmente al emprendedor en escena y es el único de sus características en el país.</p>
<p>No se enfoca solamente en emprender un negocio, sino que puede ser emprender en estudios, una carrera corporativa, en todos los aspectos de la vida!</p>
<p>Para tener más información de Bochard Group visitar:</p>
            <SpeakerSocial style={{justifyContent:'center'}} links={this.state.links} />
          </div>
          <a target="_blank" href="http://www.bochardgroup.com/">
            <img alt="Bochard Group" className={classes.bocha} src={bochardgroup} />
          </a>
        </div>
        <div className={classes.mapArea}>
          <img alt="Jump!" className={classes.jumptop} src={jumpLogo} />

          <div className={classes.mapInfo}>
            <h3>Martes 2 de Octubre</h3>
            <h3>De: 9hs a 17hs</h3>
            <h3>Torre de ANTEL</h3>
            <a target="_blank" href="https://goo.gl/maps/pGsqYUC4oKz">
              <Icon style={{order:'3', color:'#999'}}>map</Icon>
            </a>
          </div>
          <div className={classes.mapBox}>
            <GoogleMapReact
              bootstrapURLKeys={{key:'AIzaSyAqUQ1iCUq40mTqmBKHRI8w4OCZawzj3v4'}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={-34.891944}
                lng={-56.194722}
                text={jumpLogo}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
}



InfoBox.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(infoBoxStyles)(InfoBox);
