import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';


export const AppBarStyles={
    backgroundColor:"white",
    color:'black',
    height:"80px",
    display:"flex",
    justifyContent:"center",
    width: '100%',
    flex: "1 1 auto",
    
   
    
   
}
export const ToolBarStyles={
  display:'flex',
  gap:"10px"
}


export const Search = styled('div')(({ theme }) => ({
    height:"48px",
    borderRadius: "50px",
    position: 'relative',
    
    backgroundColor: "#ddd",
    '&:hover': {
      backgroundColor: "#ddd",
    },
    marginRight: theme.spacing(2),
    marginLeft:theme.spacing(2),
    width: '100%',
    flex: "1 1 auto",
    display:"flex",
    alignItems:"center",


  }));
 export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));






export const MainButtonStyle = {
    backgroundColor:"black",
    borderRadius:"24px",
    textTransform:"none",
    color:"white",
    whiteSpace: "nowrap",
    height: "48px",
    width: "150px",
  
  
    paddingLeft:"16px",
    paddingRight:"16px",
    fontWeight:"bold",
    "&:hover":{
        backgroundColor:"rgb(10,10,10)",
        transform:"translate(1.1)"
    }
}

export const CreateButtonStyle = {
    backgroundColor:"white",
    borderRadius:"24px",
    textTransform:"none",
    color:"black",
    whiteSpace: "nowrap",
    height: "48px",
    width: "150px",
    paddingLeft:"30px",
    paddingRight:"30px",
   
  
    fontWeight:"bold",
    
}


export const LoginButtonStyle = {
  backgroundColor:"white",
  borderRadius:"24px",
  textTransform:"none",
  color:"black",
  whiteSpace: "nowrap",
  height: "48px",
  paddingLeft:"15px",
  paddingRight:"15px",
 

  fontWeight:"bold",
  
}