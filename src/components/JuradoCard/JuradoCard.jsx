import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
// import classNames from "classnames";

import { withStyles } from '@material-ui/core/styles';
import SpeakerSocial from "components/SpeakerCard/SpeakerSocial.jsx";


import peopleList from 'components/peopleList/peopleList';
import juradoStyle from 'assets/jss/material-kit-react/components/juradoStyle';



const juradoPeeps = peopleList.filter(i => {
    return i.role === 'jurado';
  }
);

class JuradoCard extends React.Component {
  constructor(props) {
    super(props);
    const juradosBox = [];
    for (let i = 0; i < juradoPeeps.length; i++) {
        juradosBox.push({
          name:juradoPeeps[i].name,
          title:juradoPeeps[i].title,
          image:juradoPeeps[i].image,
          text:juradoPeeps[i].text,
          links:juradoPeeps[i].links
        });
      }
      this.state = { juradosBox };
  }
  render() {
    const { classes, juradoStyle } = this.props;
    return (
      <div className={classes.juradoWrap}>
        {
          this.state.juradosBox.map((item, index) => (
              <div key={index} className={classes.container}>
                  <img className={classes.image}  src={item.image} alt={item.image} />
                  <h4 className={classes.cardTitle}>{item.name}</h4>
                  <small className={classes.smallTitle}>{item.title}</small>
                  <div className={classes.social}>
                    <SpeakerSocial links={item.links} />
                  </div>
                </div>
              )
            )
          }
      </div>
    )
  }
}
JuradoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(juradoStyle)(JuradoCard);
