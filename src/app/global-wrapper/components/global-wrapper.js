import React, {Component} from "react";
import {connect} from "react-redux";

import {
  Route,
  BrowserRouter,
  browserHistory,

  Redirect,
} from "react-router-dom";

import PrivateWrapper from "../../wrapper-private/components/wrapper-private";
import PublicWrapper from "../../wrapper-public/components/wrapper-public";
import routeConstants from "../../../common/routes/routes";
import {getUsers, searchAndSortUsers} from "../../users/actions/user-actions";

import "../styles/style.css";

import Loader from "../../../shared_components/loader/component/loader";

class GlobalWrapper extends Component {
  state = {
    sideMenuOpen: false,
    userSortData: {
      sortByColoumn: "",
      sortDirection: "asc",
      lastSeen: Number,
      searchText: "",
    },
  };

  sideMenuToggleHandler = () => {
    this.setState( ( state ) => {
      return {
        sideMenuOpen: !state.sideMenuOpen,
      };
    } );
  };

  backgroundOpacityToggleHandler = () => {
    this.setState( { sideMenuOpen: false } );
  };

  /*   onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState((state) => ({
      ...state,
      userSortData: {
        ...state.userSortData,
        [name]: value,
      },
    }));
  };

  searchAndSortUserHandler = (e) => {
    e.preventDefault();
    const {searchAndSortUsers} = this.props;
    searchAndSortUsers(this.state.userSortData);
    console.log(this.state.userSortData);
  };
 */

  routeRenderer = ( routes, url ) => {
    return routes.map( ( route, key ) => {
      return (
        <Route path={`${ url }${ route.path }`} component={route.component} exact />
      );
    } );
  };

  render() {
    const { loader } = this.props;
    // const { url } = this.props.match;
    console.log( this.props );


    /*  const privateComponents = routeConstants.privateRoutes.map((route, key) => {
=======
    const privateComponents = routeConstants.privateRoutes.map((route, key) => {
>>>>>>> Implemented the logic of global, public and private wrapper
=======
    /*  const privateComponents = routeConstants.privateRoutes.map((route, key) => {
>>>>>>> Improved global route wrapper
      return (
        <Route
          exact
          {...route}
          path={route.path}
          component={route.component}
          key={key}
        />
<<<<<<< HEAD
<<<<<<< HEAD
      );
    });

    const publicComponents = routeConstants.publicRoutes.map((route, key) => {
      return (
        <Route
          {...route}
          path={route.path}
          component={route.component}
          key={key}
        />
      );
=======
      );
    });

    const publicComponents = routeConstants.publicRoutes.map((route, key) => {
      return (
        <Route
          {...route}
          path={route.path}
          component={route.component}
          key={key}
        />
      );
>>>>>>> 0194ab06fc15dd11377f751875c8fc29da356654
    }); */

    /* 
      --------------------------------  Sample 1 ---------------------------------------

      <PublicWrapper>
            <Switch>{publicComponents}</Switch>
          </PublicWrapper>
        </Route>
        <Route path='/app'>
          <PrivateWrapper>
            <Switch>{privateComponents}</Switch>
          </PrivateWrapper> */

    /*  
 
 ---------------------------------------Sample 2 ---------------------------------
   <Route
          exact
          path='/app'
          render={({match: {url}}) => (
            <>
              <Route path={`${url}/users`} component={login} exact />
              <Route path={`${url}/projects`} component={register} />
            </>
          )}
        />
        <Route path='/login' component={register} />
        {/* <Route path='/app' component={PrivateWrapper}>
          {privateComponents}
        </Route> */


    /* <Router history={browserHistory}>
      <Route path='/' element={App}>
        <IndexRoute element={Login} />
        <Route path='/register' element={Register} />
        <Route path='/forgot-password' element={ForgotPassword} />
        <Route path='/change-password' element={ChangePassword} />
        <Redirect from='*' to='/404' />
        <Route path='/dashboard' element={WrapperPrivate}>
          <IndexRoute element={Users} />
          <Route path='/projects' element={Projects} />
          <Redirect from='*' to='/dashboard' />
        </Route>
      </Route>
    </Router> */
  

    return (
      <BrowserRouter>
        <Route
          path='/'
          render={( { match: { url } } ) => (
            <>
              <PublicWrapper url={url}>
                {this.routeRenderer( routeConstants.publicRoutes, url )}
              </PublicWrapper>
              <Route
                path='/app'
                render={( { match: { url } } ) => (
                  <>
                    <PrivateWrapper url={url}>
                      {this.routeRenderer( routeConstants.privateRoutes, url )}
                    </PrivateWrapper>
                  </>
                )}
              />
            </>
          )}
        />
      </BrowserRouter>
    )
  }
}


const mapStateToProps = function (state) {
  return {
    loader: state.loader.loader,
  };
};

const mapDispatchToProps = {
  getUsers,
  searchAndSortUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalWrapper);
