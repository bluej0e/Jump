import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Forum from "@material-ui/icons/Forum";
import Store from "@material-ui/icons/Store";
import Videocam from "@material-ui/icons/Videocam";
import CardGiftcard from "@material-ui/icons/CardGiftcard";
import Mic from "@material-ui/icons/Mic";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Quote from "components/Typography/Quote.jsx";

import productStyle from "assets/jss/material-kit-react/views/homeSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div>
          <GridContainer>
            <GridItem xs={12}>
              <h2 className={classes.title}>Qué es JUMP!</h2>
              <p className={classes.description}>350 personas, live stream, prensa, regalos, competencia, emprendimientos, historias de vida… Esas son solo algunas de las cosas que vas a disfrutar participando de este evento!<br />Es el primer evento de estas características en Uruguay, y VOS podes participar<br />Estamos buscando personas dispuestas a arriesgarlo todo y Saltar<br />Personas con ideas, investigaciones, creencias, pero por sobre todo, personas que quieran generar un cambio y aportar para crear un mundo mejor.</p>
                <h4><em>"El leve aleteo de las alas de una mariposa se puede sentir al otro lado del mundo"</em><br />
                <small><em>–Proverbio Chino</em></small>
              </h4>
            </GridItem>
            <br />
            <br />
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Speakers"
                description="4 Speakers contarán sus historias más personales, esas que nunca contaron. Sus momentos de miedos, dudas, antes de pegar el salto a emprender y arriesgarlo todo.
En sus historias seguro te vas a sentir identificad@, y la idea es que te sirvan para que pierdas esos miedos que hoy tenes."
                icon={RecordVoiceOver}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Stands"
                description="Es la primera vez, que los stands serán de Emprendimientos nuevos y no de las grandes empresas.
Tienes tu emprendimiento pero te falta exposición y publicidad? contactanos y averigua como puedes lograr que tu marca, tu empresa sea parte de JUMP!"
                icon={Store}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Live Stream"
                description="Queremos que todos vengan! Pero no es posible por ahora.. los cupos son limitados, por eso transmitiremos toda la jornada en vivo a través de redes sociales!
No importa donde estes, lo importante es que no te lo pierdas."
                icon={Videocam}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Networking"
                description="En este evento van a haber personas de todos los rubros, todos buscando algo. Te invitamos a aprovechar el coffee break para contactar nuevas personas que te ayuden en tu proyecto, hacer alianzas e incluso buscar mentores. Recorda que del evento estarán participando referentes y las más grandes autoridades del ecosistema emprendedor."
                icon={Forum}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Pitch Para Emprendedores"
                description="Es el primer evento en el cual los emprendedores que aún no alcanzaron el éxito, se presentan en el escenario. Si tenes una idea, y ya hiciste alguna investigación, podes ser parte del evento!
4 ideas serán presentadas ante un jurado conformado por 5 grandes referentes del ecosistema emprendedor, casi 400 personas del auditorio y todos los que vean por redes sociales. Al final del día se anunciara la mejor idea (más votada), y la misma será la ganadora de asesoría gratuita por parte de Bochard Group para el desarrollo de su plan de negocios."
                icon={Mic}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Sorteos & Regalos"
                description="En un gran evento, no pueden faltar los Sorteos y regalos. Por eso al final de la jornada se hara entrega de Premios.
Para participar es importante inscribirse! No te olvides!"
                icon={CardGiftcard}
                iconColor="rose"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>

    );
  }
}

export default withStyles(productStyle)(ProductSection);
