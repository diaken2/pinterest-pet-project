import { Box, Button, DialogTitle, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { FC,useState } from "react";
import { LoginInputStyles, LoginMenuInformStyle, DialogStyle, LoginButtonStyle, ORStyle, FbButtonStyle } from './LoginMenuStyles'
import { makeVisibleLoginMenu } from "../../redux/actions/authReducerActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { VisibilityOff, Visibility } from "@mui/icons-material";
const LoginMenu: FC = () => {
  const dispatch = useAppDispatch()
  const authLoginMenuIsVisible = useAppSelector(state => state.auth.loginMenuIsVisible)
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Dialog sx={DialogStyle} onClose={() => dispatch(makeVisibleLoginMenu(false))} open={authLoginMenuIsVisible}>
      <Box display="flex" gap="20px" flexDirection="column" padding="50px" alignItems="center" textAlign="center" justifyContent="center">
        <Box>
          <Typography variant="h4" gutterBottom>
            Добавить аккаунт
          </Typography>
          <Typography width="270px" variant="body2" gutterBottom>
            У вас есть другой аккаунт Pinterest? Войдите, чтобы удобно переключаться между ними
          </Typography>
        </Box>
        <Box display="flex" gap="15px" flexDirection="column">
          <TextField sx={LoginInputStyles} id="outlined-basic" label="Адрес электронной почты" variant="outlined" />
          <TextField
    sx={LoginInputStyles}
    type={showPassword ? 'text' : 'password'}
    label="Password"
    variant="outlined"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ),
    }}
  />         <Typography variant="subtitle2" gutterBottom>
            Забыли пароль?
          </Typography>
          </Box>
          <Box display='flex' flexDirection="column">
          <Button sx={LoginButtonStyle}>Войти</Button>
          
          <Typography sx={ORStyle} variant="button" display="block" gutterBottom>
            ИЛИ
          </Typography>
          <Button sx={FbButtonStyle}>Войти через Facebook</Button>
          
        
        <Button>Войти через Google</Button>
        </Box>
        <Typography sx={LoginMenuInformStyle} variant="caption" display="block" gutterBottom>
        Продолжая, вы соглашаетесь с положениями основных документов Pinterest. Это Условия предоставления услуг; Открывает новую вкладку и Политика конфиденциальности; Открывает новую вкладку. А также подтверждаете, что прочли их. Уведомление; Открывает новую вкладку.
      </Typography>
      </Box>

    </Dialog>
  )
};

export default LoginMenu;
