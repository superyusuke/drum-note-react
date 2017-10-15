import { connect } from 'react-redux'
import Cell from '../components/Cell'

const mapStateToProps = state => {
  return {
    upper: state.notation.upper,
    lower: state.notation.lower
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

const CellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell)

export default CellContainer
