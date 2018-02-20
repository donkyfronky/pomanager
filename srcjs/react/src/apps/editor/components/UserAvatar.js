
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class UserAvatar extends Component {

  static propTypes = {

    /**
     * Use for getting url address from server
     */
    fileName: PropTypes.string.isRequired,
    /**
     * Avatar style
     */
    style: PropTypes.object,
    /**
     * Avatar size
     */
    size: PropTypes.number,

  }

  constructor(props) {
    super(props)

    this.stats = {

    }
  }


  render() {

    let { fileName, style, size } = this.props

    return (
      <div className="avatar">
        {(fileName && fileName !== '' && fileName !== 'noImage' ) ?
          ( <img src={fileName} style={style}  className="img-circle img-responsive" />)
          : (<div className="img-circle img-responsive" />) }
      </div>
    )
  }
}

/**
 * Map dispatch to props
 * @param  {func} dispatch is the function to dispatch action to reducers
 * @param  {object} ownProps is the props belong to component
 * @return {object}          props of component
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}


/**
 * Map state to props
 * @param  {object} state is the obeject from redux store
 * @param  {object} ownProps is the props belong to component
 * @return {object}          props of component
 */
const mapStateToProps = (state) => {
  return {
    fileName: state.global.loggedAuthorImage ? state.global.loggedAuthorImage : ''
  }
}



// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(UserAvatar)
