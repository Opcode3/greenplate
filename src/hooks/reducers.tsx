import { REDUCER_ACTION, REDUCER_ACTION_TYPE } from "./actions";
import { APP_STATES_TYPE } from "./states";

export const appReducer = (state: APP_STATES_TYPE, action: REDUCER_ACTION_TYPE) => {
    switch (action.type) {
        case REDUCER_ACTION.MODAL_VISIBILITY_TOGGLE:
            return { ...state, modal_visibility: state.modal_visibility ? false : true, modal_type: action.payload}
        default:
            return state
    }
}