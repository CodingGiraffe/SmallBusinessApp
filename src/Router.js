import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listing from './containers/Listing'
import Listings from './containers/Listings'
import LoginScreen from './components/LoginScreen'
import AddListing from './containers/AddListing'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            <Route path="/listing/:id" component={Listing}/>
            <Route path="/loginscreen" component={LoginScreen} />
            <ProtectedRoute path="/addListing" component={AddListing} />
        </Switch>
    );
};

export default Router