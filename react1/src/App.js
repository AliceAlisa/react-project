import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Profile, Home, Chats, NotFound } from './routes';

function App() {
  return (
    <>
      <Switch>
        <Route component={Profile} path='/profile' />
        <Route component={Chats} path='/chats' />
        <Route component={NotFound} path='/404notfound' />
        <Route exact component={Home} path='/' />
      </Switch>
    </>
  );
}
export default App;