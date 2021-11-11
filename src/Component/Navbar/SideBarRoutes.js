import React from 'react'
import Users from '../Dashboard/Users/Users'
import { Route } from 'react-router'
function SideBarRoutes() {
    return (
        <div>
            <Route path="/users" component={() => <Users />} exact />
        </div>
    )
}

export default SideBarRoutes
