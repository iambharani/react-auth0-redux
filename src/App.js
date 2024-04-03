import React,{useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useAuth0 } from "@auth0/auth0-react";
import "semantic-ui-css/semantic.min.css";
import { useDispatch } from 'react-redux';

import { setUser, clearUser } from './redux/actions';

import "./App.scss";

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setUser(user));
    } else {
      dispatch(clearUser());
    }
  }, [isAuthenticated, user, dispatch]);
  if (isLoading) return <div><Loader/></div>;

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
