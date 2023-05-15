import { NavLink, Route, Routes } from 'react-router-dom';


import React from 'react';

import Form1 from './form1';
/*
import Form2 from './App1';
import Form3 from './App2';


 */
class Menu extends React.Component {

    contructor(props) {

    }
    render() {

        return ( <
            div className = "App" >

            <
            header className = "App-header" >
            <
            nav >
            <
            ul >
            <
            li > < NavLink to = '/form1' > Creatation < /NavLink></li >
            <
            li > < NavLink to = '/form2' > Update < /NavLink></li >
            <
            li > < NavLink to = '/form3' > Delete < /NavLink></li >
            <
            /ul> <
            /nav>

            <
            Routes >
            <
            Route exact path = '/form1'
            element = { < Form1 / > } > < /Route> <
            Route exact path = '/form2'
            element = { < Form2 / > } > < /Route> <
            Route exact path = '/Form3'
            element = { < Form3 / > } > < /Route>

            <
            /Routes>      <
            /header>

            <
            /div>
        )
    }
}
export default Menu;