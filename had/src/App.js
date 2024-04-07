import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SignIn} from './components/SignIn.js'
import {SignUp} from './components/SignUp.js'
import {DoctorHome} from './components/DoctorHome.js'
import {AdminPanel} from './components/ADMIN/JS/AdminPanel.js'
import {Profile} from './components/ADMIN/JS/Profile.js'

import PostCard from './Moderator/components/PostCard/PostCard.js';

import QuestionAnswerCard from './Moderator/components/QuestionAnswerCard/QuestionAnswerCard.js';
import { Home } from './Responder/components/Home/Home.js';
import { Unanswered } from './Responder/components/Unanswered/Unanswered.js';
import AnsweringCard from './Responder/components/AnsweringCard/AnsweringCard.js';
import {Comments} from './components/MODERATOR/JS/Comments.js';
import QnA from './Moderator/components/QnA/QnA.js';
import { FlaggedPosts } from './Moderator/components/MflaggedPost/FlaggedPosts.js';


function App() {
  return (
    <Router>
    <Routes>
        {/* Moderator
        
        <Route path="/" exact element={<FlaggedPosts/>} /> 
        <Route path="/Profile" exact element={<Profile/>} />
        <Route path="/QnA" exact element={<QnA/>}/> */}

      Responder
      <Route path="/" exact element={<Home/>} />
      <Route path="/Profile" exact element={<Profile/>} />
      <Route path="/Unanswered" exact element={<Unanswered/>} />
    

      {/* ADMIN */}
      {/* <Route path="/" exact element={<AdminPanel/>} />
      <Route path="/Profile" exact element={<Profile/>}/> */}
    </Routes>
  </Router>
  );
     {/* <Route path="/signup" element={<SignUp/>} />
      <Route path="/DoctorHome" element={<DoctorHome/>}/> */}
}
export default App;
