import {SET_THEME} from './theme-consts'

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload:theme,
})