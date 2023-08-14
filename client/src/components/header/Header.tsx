
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import Tooltip from '@mui/material/Tooltip';
import {AppBarStyles,LoginButtonStyle, MainButtonStyle,ToolBarStyles, CreateButtonStyle,SearchIconWrapper, StyledInputBase, Search} from "./HeaderStyles";
export default function Header() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={AppBarStyles} position="static">
        <Toolbar sx={ToolBarStyles}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button sx={MainButtonStyle}>Главная</Button>
          <Button sx={CreateButtonStyle}>Создать</Button>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Tooltip title="Уведомления">
          <IconButton>
          <NotificationsIcon/>
          </IconButton>
          </Tooltip>
              <Tooltip title="Сообщения">
          <IconButton>
          <MessageIcon />
          </IconButton>
        </Tooltip>
        <Link to="/add-account"><Button sx={LoginButtonStyle}>Войти?</Button></Link> 
        </Toolbar>

      </AppBar>
    </Box>
  );
}