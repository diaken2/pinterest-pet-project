import {LOGIN_MENU_IS_VISIBLE} from '../types/authReducerTypes'

const makeVisibleLoginMenu=(isVisibleValue:boolean)=>({
    type:LOGIN_MENU_IS_VISIBLE,
    payload:isVisibleValue
})