import React,{useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Menu } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../redux/actions'; 
import config from '../config';

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && user) {
      dispatch(setUser(user));
    } else {
      dispatch(clearUser());
    }
  }, [isAuthenticated, user, dispatch]);

  return (
    <Menu inverted style={{ borderRadius: 0 }}>
      <Menu.Item header>MyApp</Menu.Item>
      <Menu.Menu position='right'>
        {!isAuthenticated ? (
          <Menu.Item>
            <Button primary onClick={() => loginWithRedirect()}>
              Log In
            </Button>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Button negative onClick={() => logout({ returnTo: config.homeUrl })}>
              Log Out
            </Button>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
