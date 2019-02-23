import {
  FETCHING,
  FETCHING_NOTE,
  GET_NOTES,
  GET_NOTE,
  ADDING,
  ADDED,
  REGISTERING,
  REGISTER,
  LOGIN_IN,
  LOGIN,
  ERROR} from '../actions';

const initialState = {
  notes: [],
  note: null,
  fetchingNotes: false,
  fetchingNote: false,
  savingNote: false,
  updatingNote: false,
  securingPass: false,
  userInfo: null, 
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetchingNotes: true,}
    case GET_NOTES:
      return {...state, notes: action.payload, fetchingNotes: false}
    case FETCHING_NOTE:
      return {...state, fetchingNote: true,}
    case GET_NOTE:
      return {...state, note: action.payload, fetchingNote: false, fetchingNotes: false}
    case ADDING:
      return {...state, savingNote: true}
    case ADDED:
      return {...state, savingNote: false};
    case ERROR:
      return {...state, error: action.payload}
    case REGISTERING: 
      return {...state, securingPass: true}
    case REGISTER: 
      return {...state, userInfo: action.payload, securingPass: false}
    case LOGIN_IN:
      return {...state, securingPass: true}
    case LOGIN:
      return {...state, userInfo: action.payload, securingPass: false}
    default:
      return state;
  }
}