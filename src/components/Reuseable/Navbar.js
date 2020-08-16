import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../images/logo.png'
import {FaCartArrowDown} from 'react-icons/fa'

export class Navbar extends Component {

    //state defination
    state = {
        navbarState : false,
        navbarClass : "collapse navbar-collapse",
        menus : [
            {
            id:1,
            text:"Home",
            url:'/',
            },
            {
            id:2,
            text:"About",
            url:'/about',
            },
            {
            id:3,
            text:"Services",
            url:'/services',
            },
            {
            id:4,
            text:"Contact",
            url:'/contact',
            },
        ]
    }

    //menu toggle
    myToggler = () =>{
        this.state.navbarState ? this.setState( 
                {navbarState:false, navbarClass : "collapse navbar-collapse"} 
            ) 
            :
            this.setState(
                {navbarState:true, navbarClass : "collapse navbar-collapse show"} 
            )
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm text-white bg-theme">
                {/* logo */}
                <Link to="/" className="navbar-brand ml-5">
                    <img src={logo} alt="logo" width="40px" />
                </Link>
                {/* Toggle button */}
                <button className="navbar-toggler" type="button" onClick={this.myToggler}>
                    <span className="text-white">menu</span>
                </button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                        {
                            this.state.menus.map( (menu) =>{
                                return(
                                    <li className="nav-item" key={menu.id}>
                                        <Link to={menu.url} className="nav-link text-white">{menu.text}</Link>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item">
                            <Link to="" className="nav-link text-white "><FaCartArrowDown className="cart-icon"/></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
