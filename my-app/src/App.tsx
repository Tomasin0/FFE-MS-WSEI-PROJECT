import { FC } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import {  Home } from './components/Routes/Home/home';
import { Posts } from './components/Routes/Posts/posts';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <img src={`${process.env.PUBLIC_URL}/img/logo.png`}
      <div>
      
      </div>
    </BrowserRouter>
  )
}