import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../pages/css/Companies.css';
import '../pages/css/Questions.css';
// import Item from '../components/item/Item'
// import AllCompanies from '../components/assets/AllCompanies'

const Questions = () => {
  const { companyId } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/questions/${companyId}`);
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [companyId]);

  return (
    <div className="questions-container">
      
      <h1>Check the latest questions</h1>
      <ul className="question-list">
        {questions.map((question, index) => (
          <li key={index}>
            {question.question}
            {question.link && (
              <a href={question.link} target="_blank" rel="noopener noreferrer">
                View Question
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
