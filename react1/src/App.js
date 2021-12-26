import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Profile, Home, Chats, NotFound, News, Login, SignUp } from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { initAuthAction } from './store/login/reducer';
import { getIsAuth } from './store/login/selectors'
import { useEffect } from 'react';
import { PublicRoute } from './hocs/PublicRoute';
import { PrivateRoute } from './hocs/PrivateRoute';
import { Button } from '@material-ui/core';
import { auth } from './firebase';


function App() {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initAuthAction)
  }, []);

  return (
    <>
      <Button className="logout-btn" variant="contained" onClick={() => {
        auth.signOut().then(() => {
        }).catch((error) => {
          console.log(error)
        });
      }}>LogOut </Button>


      <Switch>
        <Route component={News} path='/news' />
        <Route component={NotFound} path='/404notfound' />
        <Route exact component={Home} path='/' />

        <PublicRoute auth={isAuth} path={'/login'} component={Login} />
        <PublicRoute auth={isAuth} path={'/signup'} component={SignUp} />

        <PrivateRoute auth={isAuth} path={'/chats'} component={Chats} />
        <PrivateRoute auth={isAuth} path={'/profile'} component={Profile} />
      </Switch>

    </>
  );
}
export default App;