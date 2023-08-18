import { Typography,Button } from "@mui/material";
import {FC} from 'react'
import Box from "@mui/material/Box";
import LoginMenu from '../add-account-login-menu/LoginMenu'
const AddAccount:FC = () => {
  return (
    <Box display="flex" padding="20px" flexDirection="column" justifyContent="center" alignItems="center" gap="40px" >
        <LoginMenu/>
        <Box display="flex" textAlign="center" flexDirection="column" width="400px" gap="10px">
        <Typography variant="h4" gutterBottom>
        Добавить аккаунт
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      Добавьте новый аккаунт или подключите существующий для удобного перехода между профилями
      </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="20px" >
          <Box display="flex" gap="15px"  boxShadow="0 0 8px rgba(0,0,0,.1)" borderRadius="32px" padding="24px" width="260px" flexDirection="column" alignItems="center" textAlign="center">
          <Typography  variant="h5" gutterBottom>
          Подключение существующего аккаунта
      </Typography>
      <Typography  variant="subtitle1" gutterBottom>
      Свяжите аккаунты Pinterest с разными адресами электронной почты для удобного переключения между профилями
      </Typography>
      <Button sx={{backgroundColor:"#efefef", borderRadius:"50px", textTransform:"none", color:"black", fontWeight:"bold"}} >
          Подключить аккаунт
      </Button>
          </Box>
     
      <Box display="flex" gap="15px" borderRadius="32px" boxShadow="0 0 8px rgba(0,0,0,.1)"  flexDirection="column" alignItems="center" textAlign="center" padding="24px"  width="260px">
          <Typography  variant="h5" gutterBottom>
          Создание нового личного аккаунта
                </Typography>
      <Typography  variant="subtitle1" gutterBottom>
      Создайте отдельный аккаунт с другим адресом электронной почты      
      </Typography>
      <Button sx={{backgroundColor:"#efefef",borderRadius:"50px", textTransform:"none", color:"black", fontWeight:"bold"}}>
      Создать
      </Button>
         </Box>
         </Box>
         <Box width="478px" padding="32px" textAlign="center" >
         <Typography  variant="h5" gutterBottom>
         Управление аккаунтами
         </Typography>
      <Typography  variant="subtitle1" gutterBottom>
      {"Вы можете в любое время изменить или преобразовать свой аккаунт. Выберите «Настройки» > «Настройки аккаунта» > «Изменение аккаунта» или нажмите здесь. "}     </Typography>  
         </Box>
    </Box>
  )
};

export default AddAccount;
