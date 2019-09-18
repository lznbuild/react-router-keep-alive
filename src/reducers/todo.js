const stateData = {
  num: 67
}





const todos = (state = stateData, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // setTimeout(() => {
        console.log(action, 'action');
        return Object.assign({}, state, {
          num: action.payload
        })
      // }, 2000)
    default:
      return state
  }
}

export default todos