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

import productStyle from "assets/jss/material-kit-react/views/homeSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="about" className={classes.section}>
        <div>
          <GridContainer>
            <GridItem xs={12}>
              <h2 className={classes.title}>Qué es JUMP!</h2>
              <p className={classes.description}>
                +380 personas, live stream, prensa, regalos, competencia, emprendimientos, historias de vida… Esas son solo algunas de las cosas que vas a disfrutar participando de este evento!
                Es el primer evento de estas características en Uruguay, y VOS podes participar! Presenta tu idea, convertite en sponsor oficial del evento o incluso si tu emprendimiento ya funciona, podes tener un stand!
                Estamos buscando personas dispuestas a arriesgarlo todo y Saltar.
                Personas con ideas, creencias, pero por sobre todo que quieran generar un cambio y aportar para crear un mundo mejor.
              </p>
                <h4><em>"El leve aleteo de las alas de una mariposa se puede sentir al otro lado del mundo"</em><br />
                <small><em>–Proverbio Chino</em></small>
              </h4>
              <br />
              <br />
            </GridItem>
            <br />
            <br />
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Speakers"
                description="4 Speakers contarán sus historias más personales, esas que nunca contaron. Sus momentos de miedos y dudas antes de pegar el salto a emprender y arriesgarlo todo. En sus historias seguro te vas a sentir identificad@, y la idea es que te sirvan para que pierdas esa inseguridad."
                icon={RecordVoiceOver}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Stands"
                description="Es la primera vez, que los stands serán de Emprendimientos nuevos y no solo de las grandes empresas. Tenes tu emprendimiento pero te falta exposición y publicidad? contáctanos y averigua como podes hacer que tu marca sea parte de JUMP!"
                icon={Store}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Live Stream"
                description="Queremos que todos vengan! Pero no es posible por ahora.. los cupos son limitados, por eso transmitiremos toda la jornada en vivo a través de redes sociales! No importa donde estes, lo importante es que no te lo pierdas! Seguinos en redes para no perderte nada!"
                icon={Videocam}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Networking"
                description="En este evento van a haber personas de todos los rubros, todos buscando algo. Te invitamos a aprovechar el coffee break para contactar nuevas personas que te ayuden en tu proyecto, hacer alianzas e incluso buscar mentores. Recorda que del evento estarán participando referentes y grandes autoridades del ecosistema emprendedor, es tu momento de entrar en acción!"
                icon={Forum}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Pitch Para Emprendedores"
                description="Es el primer evento en el cual los emprendedores que tienen una idea, pisan el escenario. Si tenes una idea, y algo de investigación, podes ser parte del evento! 4 ideas serán presentadas ante un jurado conformado por 5 grandes referentes del ecosistema emprendedor, +380 personas del auditorio y vía live stream. Estas serán sometidas a una votación y al final del día se anunciará la mas votada, la cual recibirá asesoría gratuita por parte de Bochard Group para desarrollar su plan de negocios. Ponete en contacto y averigua las bases para participar!"
                icon={Mic}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <InfoArea
                title="Sorteos & Regalos"
                description="Como en todo gran evento, no pueden faltar los Sorteos y regalos.Durante toda la jornada se estarán realizando juegos, experiencias, algunas de ellas tendrán como resultado la entrega de premios al final de la jornada!pero no solo eso, tambíen van a haber sorteos por nuestras redes sociales desde... YA!Por eso no olvides que para participar tenes que inscribirte! No te olvides!"
                icon={CardGiftcard}
                iconColor="rose"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
        <br />
      </div>

    );
  }
}

export default withStyles(productStyle)(ProductSection);
