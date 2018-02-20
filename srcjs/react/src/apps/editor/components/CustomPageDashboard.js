import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as GlobalActions from '../actions/globalActions';
import { Table } from 'reactstrap';

export class CustomPageDashboard extends Component {
    render() {
        return (
            <div>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomPageDashboard)