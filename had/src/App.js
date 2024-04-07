import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SignIn} from './components/SignIn.js'
import {SignUp} from './components/SignUp.js'
import {DoctorHome} from './components/DoctorHome.js'
import {AdminPanel} from './components/ADMIN/JS/AdminPanel.js'
import {Profile} from './components/ADMIN/JS/Profile.js'

import PostCard from './Moderator/components/PostCard/MPostCard.js';

import QuestionAnswerCard from './Moderator/components/QuestionAnswerCard/MQuestionAnswerCard.js';
import { RHome } from './Responder/components/Home/RHome.js';
import { RUnanswered } from './Responder/components/Unanswered/RUnanswered.js';
import AnsweringCard from './Responder/components/AnsweringCard/RAnsweringCard.js';
import {Comments} from './components/MODERATOR/JS/Comments.js';
import QnA from './Moderator/components/QnA/MQnA.js';
import { MFlaggedPosts } from './Moderator/components/MflaggedPost/MFlaggedPosts.js';


function App() {
  return (
    <Router>
    <Routes>
        {/* Moderator
        
        <Route path="/" exact element={<MFlaggedPosts/>} /> 
        <Route path="/Profile" exact element={<Profile/>} />
        <Route path="/QnA" exact element={<QnA/>}/> */}

      Responder
      <Route path="/" exact element={<RHome/>} />
      <Route path="/Profile" exact element={<Profile/>} />
      <Route path="/Unanswered" exact element={<RUnanswered/>} />
    

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
