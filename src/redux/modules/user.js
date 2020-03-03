// imports
import { v4 as uuidv4 } from "uuid";

// actions
const SAVE_USER = "SAVE_USER";

// action creators
function saveUser(userInfo) {
  return {
    type: SAVE_USER,
    userInfo
  };
}

// API actions
function userLogin(username) {
  return dispatch => {
    // fetch("/api/user/login/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     username
    //   })
    // })
    // .then(res => res.json())
    // .then(json => {
    //   if (json.token) {
    //     dispatch(saveUser(json.token))
    //   }
    // })
    // .catch(err => console.log("error", err))
    dispatch(
      saveUser({
        uId: uuidv4(),
        username: username
      })
    );
  }
}

// initial state

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt"),
  userInfo: null
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return applySetUser(state, action);
    default:
      return state;
  }
}

// reducer functions
function applySetUser(state, action) {
  const { userInfo } = action;
  return {
    ...state,
    isLoggedIn: true,
    userInfo
  };
}


// exports

const actionCreators = {
  userLogin
};

export { actionCreators };

// reducer export
export default reducer;
