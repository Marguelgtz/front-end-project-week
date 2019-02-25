import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHING_NOTE = "FETCHING";
export const GET_NOTES = "GET_NOTES";
export const GET_NOTE = "GET_NOTE";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const ERROR = "ERROR";
export const NOTE_UPDATING = 'NOTE_UPDATING';
export const NOTE_UPDATED = "NOTE_UPDATED";
export const REGISTERING = "REGISTERING";
export const REGISTER = "REGISTER";
export const LOGIN_IN = "LOGIN_IN"
export const LOGIN  = "LOGIN"


//AUTH 
export const register = creds => dispatch => {
  dispatch({type: REGISTERING})
  axios 
    .post("http://localhost:3300/auth/register", creds)
    .then(response => {
      // JWT gets return here from back end
      //get token 
      const {token} = response.data
      localStorage.setItem('jwt', token)
      dispatch({
        type: REGISTER,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
}

export const login = creds => dispatch => {
  dispatch({type: LOGIN_IN})
  axios 
    .post("http://localhost:3300/auth/Login", creds)
    .then(response => {
      //JWT gets sendt from back end when successful
      const {token} = response.data
      localStorage.setItem('jwt', token)
      dispatch({
        type: LOGIN,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
}


//Fetching notes
export const fetchNotes = () => dispatch => {
  dispatch({type: FETCHING});
  axios 
    .get("http://localhost:3300/notes")
    .then(response => {
      console.log(response)
      dispatch({
        type: GET_NOTES,
        payload: response.data,
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })  
  })
}

//Adding a new note
// new note is added to the api but doesnt update live, I have to refresh page to see new note ---- fixed

export const addNote = note => dispatch => {
  dispatch({type: ADDING})
    axios 
      .post("http://localhost:3300/notes", note)
      .then(() => fetchNotes()(dispatch))
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,   
    })
  })
}

// Getting an especific note

export const getNote = id => dispatch => {
  dispatch({type: FETCHING_NOTE});
  axios
    .get(`http://localhost:3300/notes/${id}`)
    .then(response => {
      dispatch({type: GET_NOTE, payload: response.data})
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err})
    })
}

// Edit Note

export const editNote = (id, note) => dispatch => {
  dispatch({type: NOTE_UPDATING});
  axios 
    .put(`http://localhost:3300/notes/${id}`, note)
    .then(() => fetchNotes()(dispatch))
    .catch(err => {
      dispatch({type: ERROR, payload: err})
    })
}

// Delete Note

export const deleteNote = id => dispatch => {
  dispatch({type: FETCHING});
  axios 
    .delete(`http://localhost:3300/notes/${id}`)
    .then(()=> fetchNotes()(dispatch))
    .catch(err => {
      dispatch({type: ERROR, payload: err})
    })
}