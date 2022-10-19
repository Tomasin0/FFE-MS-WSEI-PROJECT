import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {  Home } from './components/Routes/Home/home';
import { Posts } from './components/Routes/Posts/posts';
import { GlobalStyle } from './styleHelpers/global';
import { Layout } from './components/Common/Layout';

export const App: FC = () => {
  return (
    <GlobalStyle />
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="posts" element={<Posts />} />
                <Route index element={<Home />} />
            </Routes>
        </Layout>
    </BrowserRouter>

    //   <img src={`${process.env.PUBLIC_URL}/img/logo.png`}
    //   <div>
      
    //   </div>
    // </BrowserRouter>
  );
};