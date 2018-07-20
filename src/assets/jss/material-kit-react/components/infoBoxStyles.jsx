const infoBoxStyles = {
  container: {
    margin: '5px',
    padding:'6px',
    display: 'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
  },
  mapArea: {
    borderRadius:'6px',
    display:'flex',
    // minHeight: '600px',
    height: 'auto',
    width: '100%',
    marginTop:'12px',
    order: 2,
    boxShadow: '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)',
    flexDirection:'row',
    flexWrap:'wrap',
    "@media (min-width: 992px)": {
      width: '48%',
    }
  },
  mapInfo:{
    flexDirection:'row',
    padding:'0 1em',
    textAlign:'center',
    width:'100%',
    },
  mapBox:{
    width:'100%',
    height:'300px',
    minHeight:'220px',
    minWidth:'250px',
    display:'flex',
    alignSelf:'flex-end',
    borderRadius: '0 0 6px 6px',
    overflow:'hidden'
  },
  infoArea:{
    order:1,
    borderRadius: '6px',
    width: '100%',
    marginTop:'12px',
    boxShadow: '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)',
    "@media (min-width: 992px)": {
      width: '48%',
    }
  },
  cardTitle: {
    color: '#3C4858',
    fontWeight: 700,
    fontFamily: '"Roboto Slab", "Times New Roman", serif',
    textAlign: 'center'
  },

  social: {
    display:'flex',
    justifyContent:'space-around',
  },
  bocha:{
    borderRadius:'0 0 6px 6px',
    backgroundColor:'#192734',
  },
  jumptop:{
    borderRadius:'6px 6px 0 0',
    backgroundColor:'#192734',
    width:'100%',
    maxHeight:'20%',
    padding:'2em',
  },
  textArea:{
    padding:'1em',
  },

};

export default infoBoxStyles;
