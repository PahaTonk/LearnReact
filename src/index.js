import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { CountNumber, Count, Button } from './export/Lesson.jsx'
import './index.css';



ReactDOM.render(<CountNumber child={ <Button /> }><Count /></CountNumber>  ,  document.getElementById('root'));
