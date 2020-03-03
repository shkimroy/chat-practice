// imports

// actions
const SAVE_TOKEN = "SAVE_TOKEN";

// action creators
function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  }
}

// API actions
function userLogin(username, password) {
  return dispatch => {
    fetch("/api/user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => res.json())
    .then(json => {
      if (json.token) {
        dispatch(saveToken(json.token))
      }
    })
    .catch(err => console.log("error", err))
  }
}

// initial state

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    default:
      return state;
  }
}

// reducer functions
function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    token
  }
}


// exports

const actionCreators = {
  userLogin
};

export { actionCreators };

// reducer export
export default reducer;
