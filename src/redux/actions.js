//action types
export const ADD_ITEM = "ADD_ITEM"
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE"
export const CHANGE_FILTER = "CHANGE_FILTER"
export const DELETE_ITEM = "DELETE_ITEM"

//filter settings
export const SHOW_ALL = "SHOW_ALL"
export const SHOW_UNCOMPLETED = "SHOW_UNCOMPLETED"
export const SHOW_COMPLETED = "SHOW_COMPLETED"

export function addItem(payload) {
    return { type: ADD_ITEM, payload }
}

export function toggleComplete(payload) {
    return { type: TOGGLE_COMPLETE, payload }
}

export function changeFilter(payload) {
    return {type: CHANGE_FILTER, payload}
}

export function deleteItem(payload) {
    return {type: DELETE_ITEM, payload}
}