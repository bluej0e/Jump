
const timeLineStyle = {
  content:{
    marginTop:"20px",
    display:'flex',
    flexDirection:'column',
    marginLeft:'auto',
    marginRight:'auto',
    maxWidth:'700px',
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    marginBottom: "1em",
    borderRadius: "4px",
  },
  time:{
    fontSize: '1rem',
    order:4,
    flexGrow:1,
    textAlign:'right',
    justifySelf:'right',
    marginLeft:'0.4em',
    width:'15%'
  },
  title:{
    fontSize: '1.2rem',
    order:2,
    flexGrow:99,
    fontWeight:700,
    margin:'0.4em'
  },
  text:{
    display:'none',
  },
  icon:{
    order:1,
    flexGrow:1,

  },
  icoGreen:{
    order:1,
    flexGrow:1,
    backgroundColor:'#4caf50',
  },
  icoBlue:{
    order:1,
    flexGrow:1,
    backgroundColor:'#00acc1',
  },
  icoRed:{
    order:1,
    flexGrow:1,
    backgroundColor:'',
  },
  icoPurp:{
    order:1,
    flexGrow:1,
    backgroundColor:'#9c27b0',
  },
  icoRose:{
    order:1,
    flexGrow:1,
    backgroundColor:'#e91e63',
  },
  agendaRow:{
    width:'100%',
    maxWidth:'700px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    background:'#fff',
    borderLeft:'7px solid',
    borderBottom:'2px solid',
    overflow:'visible!important',
    padding:'0.5em 0.8em',
    '&:after':{
      content:'',
      padding:'1rem',
    },
    '&:hover':{
      transition:'0.1618s ease-in-out',
      transform:'scale(1.0618)',
      // background: color,
      boxShadow: '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)',
      // '&:after':{
      //   transition:'fade-in',
      // },
    },
    '&:nth-child(odd)':{
      background:'#f9f9f9',
    }
  },
}
export default timeLineStyle;
