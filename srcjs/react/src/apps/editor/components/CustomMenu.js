import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as GlobalActions from '../actions/globalActions';


export class CustomMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            actual_route: this.props.actual_route
        }
        this.menuClicked = this.menuClicked.bind(this);
    }

    menuClicked = (evt)=>{
        let clicked_li = evt.currentTarget.getAttribute('data-href');
        this.props.clickMenulink(clicked_li);
    }
    /*

                                <li> <a href="charts.html"><i class="icon-presentation"></i><span>Charts</span></a></li>
                                <li> <a href="tables.html"> <i class="icon-grid"> </i><span>Tables  </span></a></li>
                                <li> <a href="login.html"> <i class="icon-interface-windows"></i>
                                <span>Login page</span></a></li>
                                <li> <a href="#"> <i class="icon-mail"></i><span>Demo</span>
                                    <div class="badge badge-warning">6 New</div></a></li>
                            </ul>
                        </div>
                        <div class="admin-menu">
                            <ul id="side-admin-menu" class="side-menu list-unstyled">
                                <li> <a href="#pages-nav-list" data-toggle="collapse" aria-expanded="false"><i class="icon-interface-windows"></i><span>Dropdown</span>
                                    <div class="arrow pull-right"><i class="fa fa-angle-down"></i></div></a>
                                    <ul id="pages-nav-list" class="collapse list-unstyled">
                                        <li> <a href="#">Page 1</a></li>
                                        <li> <a href="#">Page 2</a></li>
                                        <li> <a href="#">Page 3</a></li>
                                        <li> <a href="#">Page 4</a></li>
                                    </ul>
                                </li>
                                <li> <a href="#"> <i class="icon-screen"> </i><span>Demo</span></a></li>
                                <li> <a href="#"> <i class="icon-flask"> </i><span>Demo</span>
                                    <div class="badge badge-info">Special</div></a></li>
                                <li> <a href=""> <i class="icon-flask"> </i><span>Demo</span></a></li>
                                <li> <a href=""> <i class="icon-picture"> </i><span>Demo</span></a></li>
                            </ul>
                        </div>
                    </div>



                    <li className={"active"}>
                        <a href={"#"} data-href={'frodo'} onClick={this.menuClicked}>
                            <i className={"icon-home"}></i>
                            <span >Home</span></a>
                    </li>
                    <li> <a href="#"><i className={"icon-form"}></i><span>Forms</span></a></li>



     */

    render() {

        const listItems = this.props.menu_routes.map((item) =>
            <li >
                <Link to={item.href}>
                    <i className={item.icon}></i>
                    <span >{item.value}</span>
                </Link>
            </li>
        );

        return (
            <div className="main-menu">
                <ul id="side-main-menu" className={"side-menu list-unstyled"}>
                    {listItems}
                </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomMenu)