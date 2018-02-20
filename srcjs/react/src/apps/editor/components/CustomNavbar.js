import React, {Component} from 'react';
import {Container} from 'reactstrap';
import { connect } from 'react-redux'
import CustomMenu from './CustomMenu';


export class CustomNavbar extends Component {

    render() {
        return (
            <nav className={"side-navbar"}>
                <div className={"side-navbar-wrapper"}>
                    <div className={"sidenav-header d-flex align-items-center justify-content-center"}>
                        <div className={"sidenav-header-inner text-center"}>
                            <img src={'https://d19m59y37dris4.cloudfront.net/dashboard/1-1/img/avatar-1.jpg'} alt={"person"} className={"img-fluid rounded-circle"}/>
                            <h2 className={"h5 text-uppercase"}>Anderson Hardy</h2><span className={"text-uppercase"}>Web Developer</span>
                        </div>
                        <div className={"sidenav-header-logo"}><a href={"index.html"} className={"brand-small text-center"}>
                            <strong>B</strong><strong className={"text-primary"}>D</strong></a></div>
                    </div>
                    <CustomMenu/>
                </div>
            </nav>
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
    export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar)