import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Lesson from './export/Lesson.jsx'
import './index.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

ReactDOM.render(<Lesson />,  document.getElementById('root'));
