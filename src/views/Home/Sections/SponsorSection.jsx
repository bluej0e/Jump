import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/

// core components



import sponsorStyle from "assets/jss/material-kit-react/views/homeSections/sponsorStyle.jsx";

// import logos
import ande from 'assets/img/logos/ande.svg';
import desem from 'assets/img/logos/desem.svg';
import ort from 'assets/img/logos/ort.svg';
import endeavor from 'assets/img/logos/endeavor.svg';
import marcel from 'assets/img/logos/marcel.svg';
import odontologia from 'assets/img/logos/odontologia2.svg';
import uruguayxxi from 'assets/img/logos/uruguayxxi.svg';


const sponsors = [
  {
    link: 'https://www.ande.org.uy/',
    img: ande,
    name: 'ANDE',
    type: 'apoyo',
  },
  {
    link: 'http://www.desem.org.uy/',
    img: desem,
    name: 'DESEM',
    type: 'apoyo',
  },
  {
    link: 'http://www.endeavor.org.uy/',
    img: endeavor,
    name: 'endeavor',
    type: 'apoyo',
  },
  {
    link: 'https://cie.ort.edu.uy/',
    img: ort,
    name: 'ORT | CIE',
    type: 'apoyo',
  },
  {
    link: 'https://www.marcel.uy/',
    img: marcel,
    name: 'Marcel Burgos',
    type: 'sponsor',
  },
  {
    link: 'http://www.odontologiacavalleri.com.uy/',
    img: odontologia,
    name: 'Odontología Cavalleri',
    type: 'sponsor',
  },
  {
    link: 'https://www.uruguayxxi.gub.uy/',
    img: uruguayxxi,
    name: 'Uruguay XXI',
    type: 'apoyo',
  },
];


class SponsorSection extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div id="sponsors" className={classes.section}>
        <h2 className={classes.title}>Gracias a nuestros sponsors</h2>
            <br />
              <div className={classes.gridtainer}>
                  {sponsors.filter(x => x.type === 'sponsor').map(tile => (
                    <div className={classes.logoImgSponsor} key={tile.img}>
                      <a target="_blank" href={tile.link}>
                        <img src={tile.img} alt={tile.title} />
                      </a>
                    </div>
                    ))}
                </div>
                <br />
            <h3 className={classes.title}>Y el apoyo de</h3>
          <br />
        <div className={classes.gridtainer}>
            {sponsors.filter(x => x.type === 'apoyo').map(tile => (
              <div className={classes.logoImg} key={tile.img}>
                <a target="_blank" href={tile.link}>
                  <img src={tile.img} alt={tile.title} />
                </a>
              </div>
              ))}
          </div>
        </div>
      );
    }
}

export default withStyles(sponsorStyle)(SponsorSection);
