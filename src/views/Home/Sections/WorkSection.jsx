import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomSelector from "components/CustomInput/CustomSelector.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Faq from "components/Faq/Faq.jsx";

import workStyle from "assets/jss/material-kit-react/views/homeSections/workStyle.jsx";

const dropdownColor = {
  color:'purple'
}

const ranges = [
  {
    value: 'pitch',
    label: 'Quiero exponer mi Pitch',
  },
  {
    value: 'sponsor',
    label: 'Me interesa ser Sponsor',
  },
  {
    value: 'stand',
    label: 'Me gustaría tener un Stand',
  },
  {
    value: 'entrada',
    label: 'Quiero obtener una entrada',
  },
  {
    value: 'otro',
    label: 'Otra razón no listada',
  },
];

class WorkSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido:'',
      email: '',
      razon: '',
      mensaje:''
    };
  }

  signUp(){
    const { nombre, apellido, email, razon, mensaje } = this.state;
    console.log(this.state)
  }

  render() {
    const { classes } = this.props;
    const { nombre, apellido, email, razon, mensaje } = this.state;

    return (

      <div className={classes.section}>
      <Card raised='true'>
        <GridContainer justify="center" id="mauticform_wrapper_jumpdatabase">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Contactar</h2>
            <h4 className={classes.description}>
              ¿Te gustaría hablar con nosotros? Contactanos acá
            </h4>
            <form
              method="post"
              action="http://phpstack-123828-394161.cloudwaysapps.com/form/submit?formId=2"
              id="mauticform_jumpdatabase"
              data-mautic-form="jumpdatabase"
              encType="multipart/form-data"
            >
              <GridContainer data-mautic-form-page="1">
                <GridItem
                  xs={12} sm={12} md={6}>
                  <CustomInput
                    id="name"
                    autoComplete="name"
                    require='true'
                    name="mauticform[nombre]"
                    value={nombre}
                    type="text"
                    labelText="Nombre"
                    onChange={event => this.setState({nombre: event.target.value})}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem
                  xs={12} sm={12} md={6}>
                  <CustomInput
                    id="apellido"
                    autoComplete="lastname"
                    name="mauticform[apellido]"
                    value={apellido}
                    type="text"
                    labelText="Apellido"
                    onChange={event => this.setState({apellido: event.target.value})}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    autoComplete="email"
                    id="email"
                    require='true'
                    name="mauticform[email]"
                    type="email"
                    labelText="Email"
                    value={email}
                    onChange={event => this.setState({email: event.target.value})}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>

                <TextField
                  select
                  color="primary"
                  id="razon"
                  require='true'
                  label="Razón"
                  name="mauticform[razon]"
                  value={razon}
                  onChange={event => this.setState({razon: event.target.value})}
                  helperText="Elige una opción"
                  width="400px"
                  >
                    {ranges.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>


                </GridItem>


              <CustomInput
                  labelText="Tu Mensaje"
                  id="message"
                  name="mauticform[mensaje]"
                  value={mensaje}
                  onChange={event => this.setState({mensaje: event.target.value})}
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 4
                  }}
                />
                <GridContainer justify="center">
                  <GridItem xs={8} className={classes.textCenter}>
                    <Button
                      color="danger"
                      type="submit"
                      name="mauticform[submit]"
                      id="mauticform_input_jumpdatabase_submit"
                      onClick={() => this.signUp()}
                      >Contactar</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
              <input type="hidden" name="mauticform[formId]" id="mauticform_jumpdatabase_id" value="2"/>
              <input type="hidden" name="mauticform[return]" id="mauticform_jumpdatabase_return" value=""/>
              <input type="hidden" name="mauticform[formName]" id="mauticform_jumpdatabase_name" value="jumpdatabase"/>
            </form>
          </GridItem>
        </GridContainer>
      </Card>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
