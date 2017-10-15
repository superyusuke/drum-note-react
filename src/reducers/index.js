const text = (state = {upper: 'upper', lower: 'lower'}, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      switch (action.position) {
        case 'upper':
          return (
                        Object.assign({}, state, {upper: action.text})
          )

        case 'lower':
          return (
                        Object.assign({}, state, {lower: action.text})
          )
        default:
          return state
      }
    default:
      return state
  }
}

export default text
