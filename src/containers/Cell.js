import {connect} from 'react-redux'
import ComponentCell from '../components/ComponentCell'

const mapStateToProps = state => {
  return {
    upper: state.upper,
    lower: state.lower
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (text, position) => {
      dispatch({
        type: 'CHANGE_TEXT',
        position: position,
        text: text
      })
    }
  }
}

const Cell = connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentCell)
export default Cell
