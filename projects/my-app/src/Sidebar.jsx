import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {NavLink} from "react-router-dom";


function Sidebar() {
    return (
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem>Sidebar</MenuItem>
                    <SubMenu title="Pages" >
                        {/*<MenuItem><NavLink to='/comment'>Comment</NavLink></MenuItem>*/}
                        <MenuItem><NavLink to='/comments'>Comments</NavLink></MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
    );
}
export default Sidebar;