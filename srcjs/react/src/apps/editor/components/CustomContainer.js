import React, {Component} from 'react';
import {Container} from 'reactstrap';
import { connect } from 'react-redux'
import CustomUserNavbar from './CustomUserNavbar';
import CustomMenu from './CustomMenu';
import { Table } from 'reactstrap';
import CustomPage from './CustomPage';


export class CustomContainer extends Component {

    render() {
        return (
            <div className={"page"}>
                <CustomUserNavbar/>
                <CustomPage/>
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
        clickMenulink: (href) => dispatch(GlobalActions.clickedRoute(href)),
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
        menu_routes: state.globalAppData.user.routes,
        actual_route: state.globalAppData.actual_route
    }
}



// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(CustomContainer)