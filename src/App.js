import React,{Component} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router } from 'react-router';
import AppRouter from'./Component/config/Router';
import Quiz from'./Component/Quiz'

function App() {
  
  return (
   
 <div> 
<Quiz/>
   </div>
  )
  }


 export default App ;