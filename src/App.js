import { useEffect, createContext, useReducer, useContext, useState } from 'react'
import './App.css';
import NavBar from './Components/Navbar';
import About from './Screens/About';
import Contact from './Screens/Contact';
import React from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Footer from './Components/Footer';
import AllPosts from './Screens/AllPosts';
import PostDetail from './Screens/PostDetail';
import CreatePost from './Screens/CreatePost';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import { initalUserState, userReducer } from './reducers/userreducer';
import MyAllPosts from './Screens/MyAllPosts';

export const UserContext = createContext();

function DynamicRoutes() {

  const navigate = useNavigate()
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {

    const token = localStorage.getItem('token');
    if (token) {//User is already logged in
      const user = JSON.parse(localStorage.getItem('user'));
      const userState = { 'token': token, 'user': user };
      const action = { type: 'LOGIN', payload: userState }
      dispatch(action);
      navigate('/posts');
    } else {
      navigate('/login');
    }
  }, []);

  return (

    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/signup' element={<Signup />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/posts' element={<AllPosts />}></Route>
      <Route exact path='/myposts' element={<MyAllPosts />}></Route>
      <Route exact path='/create' element={<CreatePost />}></Route>
      <Route exact path='/create/:postId/:userId' element={<CreatePost />}></Route>
      <Route exact path='/posts/:postId/:userId' element={<PostDetail />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>
    </Routes>
  )
}
function App() {

  const [state, dispatch] = useReducer(userReducer, initalUserState);

  return (
    <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
      <Router>
        <div>
          <NavBar></NavBar>
          <DynamicRoutes />
          <Footer></Footer>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
