export const LoginInputStyles={
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':{
        borderColor: '#cdcdcd',
        borderWidth:'2px',
        borderRadius:'20px'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#a5a5a5',
        
        
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        boxShadow:"0 0 0 4px rgba(0,132,255,.5)",
        borderColor: '#cdcdcd',
      },
      '& .MuiInputLabel-root.Mui-focused':{
          color:'black',
          borderColor: '#cdcdcd',
      }
}
export const DialogStyle={
    '& .MuiPaper-root.MuiDialog-paper':{
    width: "440px",
    height: "660px",
    overflow: "hidden",
    backgroundColor:"#fff",
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "40px",
    boxShadow:" 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",
    margin: "32px",
    position: 'relative',
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px"
    }
}

export const LoginMenuInformStyle={
    
    fontSize: "11px",
    fontWeight: "normal",
    textAlign: "center",
    transition: "opacity 0.2s linear 0s",
    color: "rgb(118, 118, 118)",
    width: "224px"

}
export const LoginButtonStyle={
    border: "0px",
    height: "40px",
    display: "inline-block",
    borderRadius: "20px",
    fontSmoothing: "antialiased",
    padding: "0px 18px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "8px",
    verticalAlign: "middle",
    textAlign: "center",
    backgroundColor: "rgb(230, 0, 35)",
    color: "rgb(255, 255, 255)",
    width:"268px"
    
}


export const FbButtonStyle={...LoginButtonStyle, backgroundColor:"rgb(24, 119, 242)"}

export const ORStyle={
    marginBottom: "8px",
    marginTop: "8px",
    overflow: "hidden",
    textAlign: "center",
    fontSize: "14px",
    color: "rgb(51, 51, 51)",
    fontWeight: "bold"
}