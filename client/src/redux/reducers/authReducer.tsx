import {LOGIN_MENU_IS_VISIBLE,IAuthInform} from '../types/authReducerTypes'
const authInform:IAuthInform={
    loginMenuIsVisible:true
}

const authReducer=(state=authInform,action:any)=>{
    switch(action.type){
        case LOGIN_MENU_IS_VISIBLE:
            return {...state, loginMenuIsVisible:action.payload}
        default:
            return state
    }
    
}

export default authReducer