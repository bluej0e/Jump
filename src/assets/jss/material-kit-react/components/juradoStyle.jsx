

const juradoStyle = {
  juradoWrap:{
    display:'flex',
    justifyContent:'space-around',
    flexWrap: 'wrap',
  },
  image: {
    height: '150px',
    width: '150px',
    gridRow: 1,
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    borderRadius: '50%',
    margin: '-3em auto 0 auto',
  },
  cardTitle: {
    gridRow: 2,
    color: '#3C4858',
    fontWeight: 700,
    fontFamily: '"Roboto Slab", "Times New Roman", serif',
    textAlign: 'center'
  },
  smallTitle: {
    gridRow: 3,
    lineHeight: '1em',
    textAlign:'center',
    padding:'1em'
  },
  social: {
    display:'flex',
    justifyContent:'space-around',
    gridRow: 4,
  },
  container: {
    margin: '4em 20px',
    display: 'grid',
    width:'300px',
    maxWidth: '500px',
    minWidth: '250px',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    borderRadius: '6px',
    boxShadow: '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)',
  },
};

export default juradoStyle;
