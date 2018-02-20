import React, {Component} from 'react';
import { connect } from 'react-redux'
import CustomNavbar from './CustomNavbar';
import CustomContainer from './CustomContainer';

import * as globalActions from './../actions/globalActions'

export class Full extends Component {

    // Constructor
    constructor(props) {
        super(props)
        this.props.post('mario');
        this.state = {
        }

    }

    render() {

        return (
            <div>
                <CustomNavbar/>
                <CustomContainer/>
            </div>
        );
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
        post: (post, callBack, failureCallBack) => dispatch(globalActions.dbAddPost(post, callBack,failureCallBack)),
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
        StateApp: state.globalAppData,
    }
}



// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Full)
