import React, { useState } from 'react';
import '../CSS/QnA.css'
import QuestionAnswerCard from './QuestionAnswerCard';
import { Link } from 'react-router-dom';


export const QnA = () => {
  const qaData = [
    {
      question: 'What are the health concerns due to obesity?',
      answer: 'Obesity is associated with a wide range of health concerns, both physical and psychological...',
    },
    {
      question: 'How can I improve my mental health?',
      answer: 'Improving mental health involves various strategies such as regular exercise, maintaining...',
    },
    // Add more Q&A objects as needed
  ];
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
  };
  return (
    <div className="app-container">
    {/* Navbar */}
    <nav class="navbar navbar-expand-lg ">
    <img class = "logo" src="images/logo.png" alt="Logo" />
      <a class="navbar-brand" href="#">Tranquil Minds</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/" style={linkStyle}>Home</Link></a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-primary" href="#">QnA's </a>
          </li>
        
        </ul>

      </div>
    </nav>
    <div className='main-content'>
      <div className="vertical-column1">
       
      </div>
      <div className='QnAs'>
        {qaData.map((qa, index) => (
          <div className="column-item" key={index}>
            <QuestionAnswerCard
              question={qa.question}
              answer={qa.answer}
              onUpvote={() => {}}
              onDownvote={() => {}}
            />
          </div>
        ))}
      

      </div>
    </div>
    

  </div>

  )
};
export default QnA;

