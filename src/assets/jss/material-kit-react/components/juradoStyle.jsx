
const juradoStyle = {
  juradoWrap:{
    display:'flex',
    justifyContent:'space-around',
    flexWrap: 'wrap'
  },
    name: {
      gridColumn: 1,
      gridRow: 1,
      marginTop: '20px',
      borderTop:'1px solid transparent',
      borderRight:'1px solid transparent',
      borderRadius: '0 6px'

    },
    image: {
      height: '100px',
      width: '100px',
      gridColumn: 1,
      gridRow: 1,
      boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
      borderRadius: '6px'
    },
    about: {
      gridColumn: 1,
      gridRow: 2,
      borderRight: '1px solid transparent',
    },
    social: {
      display:'flex',
      justifyContent:'flex-end',
      marginLeft: '20px',
      gridColumn: '1 / 3',
      gridRow: 2,
      borderLeft:'1px solid transparent',
      borderBottom:'1px solid transparent',
      borderRight:'1px solid transparent',
      borderRadius:'0 0 6px 6px',
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
      },
    container: {
      margin: '1em',
      display: 'grid',
      maxWidth: '400px',
      minWidth: '400px',
      gridTemplateRows: '100px 1fr',
      gridTemplateColumns: '100px auto',
    },
    innercontainer: {
      display: 'grid',
      gridColumn: 2,
      gridRow: 1,

    }

};

export default juradoStyle;
