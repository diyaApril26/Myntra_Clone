import {Types} from './actionTypes'

export const increment = () => {
    return ({
        type:  Types.INCREMENT       })
}
export const decrement = () => {
    return ({
        type:  Types.DECREMENT       })
}
export const reset = () => {
    return ({
        type:  Types.RESET       })
}
export const increment_by = (value) => {
    return ({
        type:  Types.INCREMENT_BY,
        payload: value   })
}
export const decrement_by = (value) => {
    return ({
        type:  Types.DECREMENT_BY,
        payload: value     })
}