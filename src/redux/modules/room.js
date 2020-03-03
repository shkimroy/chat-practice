function makeNewRoom(title) {
  return dispatch => {
    return fetch("/api/chat/room/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title
      })
    })
    .then(res => res.json())
    .then(json => json)
  }
}

const initialState = {
  rooms: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const actionCreators = {
  makeNewRoom
};

export { actionCreators };

export default reducer;