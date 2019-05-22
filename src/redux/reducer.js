import { ADD_ITEM } from './actions.js'
import { SHOW_ALL } from './actions.js'
import { SHOW_COMPLETED } from './actions.js'
import { SHOW_UNCOMPLETED } from './actions.js'
import { TOGGLE_COMPLETE } from './actions.js'
import { CHANGE_FILTER } from './actions.js'


const initialState = {
    items: [],
    filter: SHOW_ALL
}

function reducer( state = initialState, action ) {
    if (action.type === ADD_ITEM) {
        //console.log(state)
        return Object.assign({}, state, {
            items: state.items.concat(action.payload)
          });
    }
    
    if (action.type === TOGGLE_COMPLETE) {        
        action.payload.completed = !action.payload.completed;
        return {
            ...state,
            items: state.items.map(item => {
              if (item.id === action.payload.id) { return action.payload }
              return item
            })
        }
    }

    if(action.type === CHANGE_FILTER) {
        console.log(`this is working. the new filter is ${action.payload}`)
        return Object.assign({}, state, {
            filter: action.payload
          });
    }

    return state
}

export default reducer