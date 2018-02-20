import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as GlobalActions from '../actions/globalActions';

export class CustomUserNavbar extends Component {


    constructor(props) {
        super(props)

        this.state = {
            actual_route: this.props.actual_route
        }

    }

    render() {
        console.log('customNav');
        return(
            <header className={"header"}>
                <nav className={"navbar"}>
                    <div className={"container-fluid"}>
                        <div className={'navbar-holder d-flex align-items-center justify-content-between'}>
                        <div className={"navbar-header"}>

                        </div>
                            <ul className={"nav-menu list-unstyled d-flex flex-md-row align-items-md-center"}>
                                <li className={"nav-item"}>
                                    <a href={"login.html"} className={"nav-link logout"}>
                                        Logout<i className={"fa fa-sign-out"}></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomUserNavbar)
/*




                    <li class="nav-item dropdown"> <a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link"><i class="fa fa-bell"></i><span class="badge badge-warning">12</span></a>
                        <ul aria-labelledby="notifications" class="dropdown-menu">
                            <li><a rel="nofollow" href="#" class="dropdown-item">
                                <div class="notification d-flex justify-content-between">
                                    <div class="notification-content"><i class="fa fa-envelope"></i>You have 6 new messages </div>
                                    <div class="notification-time"><small>4 minutes ago</small></div>
                                </div></a></li>
                            <li><a rel="nofollow" href="#" class="dropdown-item">
                                <div class="notification d-flex justify-content-between">
                                    <div class="notification-content"><i class="fa fa-twitter"></i>You have 2 followers</div>
                                    <div class="notification-time"><small>4 minutes ago</small></div>
                                </div></a></li>
                            <li><a rel="nofollow" href="#" class="dropdown-item">
                                <div class="notification d-flex justify-content-between">
                                    <div class="notification-content"><i class="fa fa-upload"></i>Server Rebooted</div>
                                    <div class="notification-time"><small>4 minutes ago</small></div>
                                </div></a></li>
                            <li><a rel="nofollow" href="#" class="dropdown-item">
                                <div class="notification d-flex justify-content-between">
                                    <div class="notification-content"><i class="fa fa-twitter"></i>You have 2 followers</div>
                                    <div class="notification-time"><small>10 minutes ago</small></div>
                                </div></a></li>
                            <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center"> <strong> <i class="fa fa-bell"></i>view all notifications                                            </strong></a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown"> <a id="messages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link"><i class="fa fa-envelope"></i><span class="badge badge-info">10</span></a>
                        <ul aria-labelledby="notifications" class="dropdown-menu">
                            <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                                <div class="msg-profile"> <img src="https://d19m59y37dris4.cloudfront.net/dashboard/1-1/img/avatar-1.jpg" alt="..." class="img-fluid rounded-circle"></div>
                                <div class="msg-body">
                                    <h3 class="h5">Jason Doe</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                                </div></a></li>
                            <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                                <div class="msg-profile"> <img src="https://d19m59y37dris4.cloudfront.net/dashboard/1-1/img/avatar-2.jpg" alt="..." class="img-fluid rounded-circle"></div>
                                <div class="msg-body">
                                    <h3 class="h5">Frank Williams</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                                </div></a></li>
                            <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                                <div class="msg-profile"> <img src="https://d19m59y37dris4.cloudfront.net/dashboard/1-1/img/avatar-3.jpg" alt="..." class="img-fluid rounded-circle"></div>
                                <div class="msg-body">
                                    <h3 class="h5">Ashley Wood</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                                </div></a></li>
                            <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center"> <strong> <i class="fa fa-envelope"></i>Read all messages    </strong></a></li>
                        </ul>
                    </li>
*/