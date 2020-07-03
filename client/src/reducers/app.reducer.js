import { GET_CURR_LIST, SET_CURR_LIST, TOGGLE_MODAL, MODAL_ADD, MODAL_EDIT } from '../constants/constants';

export default function reducer(state, action) {
    switch (action.type) {
        case GET_CURR_LIST: 
            switch (state.currList) {
                case 'items':
                    return {...state, items: action.payload};
                case 'clients':
                    return {...state, clients: action.payload};
                case 'diversities':
                    return {...state, diversities: action.payload};
                default: 
                    return state;
            }    
        case SET_CURR_LIST:
            return {...state, currList: action.payload};

        case TOGGLE_MODAL:
            return { ...state, showModal: action.payload};
        default:
            return state;
    }
}