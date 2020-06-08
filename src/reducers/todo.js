
const stateData = {
  num: 67
}

const todos = (state = stateData, action) => {
  switch (action.type) {
    case 'ASYNCADD_TODO':
      // return Object.assign({}, state, {
      //   num: action.payload
      // })
          console.log('执行');
        return {
          ...state,
          num: action.payload
        }
      break;
    case 'ADD_TODO':
      return {
        ...state,
        num:state.num+1
      }
    default:
      return state
  }
}

export default todos;