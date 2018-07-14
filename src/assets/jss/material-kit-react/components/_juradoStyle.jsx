
const juradoStyle = {
  juradoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  juradobox: {

  },
  card: {
    width:"auto",
    height: 100,
    display: 'flex',
    margin: '1em'
  },
  media: {
    height: 100,
    width: 100
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },

    name: {
      gridColumn: 1,
      gridRow: 1,
      background: 'pink',
      marginTop: '10px'
    },
    image: {
      height: '100px',
      width: '100px',
      background: 'green',
      gridColumn: 1,
      gridRow: 1
    },
    about: {
      gridColumn: 1,
      gridRow: 2,
      background: 'yellow'
    },
    social: {
      marginLeft: '10px',
      gridColumn: 1 / 3,
      gridRow: 2,
      background: 'grey'
    },
    gridtainer: {
      margin: '0 auto',
      display: 'grid',
      maxWidth: '400px',
      gridTemplateRows: '100px 1fr',
      gridTemplateColumns: '100px auto'
    },
    innercontainer: {
      display: 'grid',
      gridColumn: 2,
      gridRow: 1
    }
};

export default juradoStyle;
