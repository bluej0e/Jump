const timeLineStyle = {
  content:{
    marginTop:"50px",
    textAlign:"center",
  },
  timelineOuter:{
    width:"80%",
    margin:"0 auto"
  },
  timeline:{
    borderLeft:"8px solid #42A5F5",
    borderBottomRightRadius:"2px",
    borderTopRightRadius:"2px",
    boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
    color:"#333",
    margin:"50px auto",
    letterSpacing:"0.5px",
    position:"relative",
    lineHeight:"1.4em",
    padding:"20px",
    listStyle:"none",
    textAlign:"left",
    padding:'1em',

  },
  tlItem:{
    fontSize:"1.4em"
  },
  timelineEvent:{
    borderBottom:"1px solid rgba(160, 160, 160, 0.2)",
    paddingBottom:"15px",
    marginBottom:"20px",
    position:"relative",
    '&::before': {
      left:"-177.5px",
      color:"#212121",
      content:"attr(data-date)",
      textAlign:"right",
      fontSize:"16px",
      minWidth:"120px"
    },
    '&::after':{
        boxShadow:"0 0 0 8px #42A5F5",
        left:"-30px",
        background:"#212121",
        borderRadius:"50%",
        height:"11px",
        width:"11px",
        content:" ",
        top:"5px"
      }
    },
    // timelineEvent _last_of_type:{
    //   paddingBottom:"0",
    //   marginBottom:"0",
    //   border:"none"
    // },

        "@media (max-width: 945px)":{
          __expression__:"(max-width: 945px)",
          timeline__event__before:{
            left:"0.5px",
            top:"20px",
            minWidth:"0",fontSize:"13px"
          },
          timeline_h3:{
            fontSize:"16px"
          },
          timeline_p:{
            paddingTop:"20px"
          },
          section_lab_h3_card_title:{
            padding:"5px",
            fontSize:"16px"
          }
        },
        "@media (max-width: 768px)":{
          __expression__:"(max-width: 768px)",
          timeline__event__before:{
            left:"0.5px",
            top:"20px",
            minWidth:"0",
            fontSize:"13px"
          },
          timeline__event_nth_child_1___before:{
            top:"38px"
          },
          timeline__event_nth_child_3___before:{
            top:"38px"
          },
          timeline__event_nth_child_5___before:{
            top:"38px"
          },
          timeline_h3:{
            fontSize:"16px"
          },
          timeline_p:{
            paddingTop:"20px"
          }
        },
      }
export default timeLineStyle;
