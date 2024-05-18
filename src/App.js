import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiLeetcode,
} from "react-icons/si";
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Copyright © Crypto kt_05 All Rights Reserved.
        </Typography.Title>
        <div className="socialIcons">
                    <a className="icon" href="https://www.linkedin.com/in/ayushkdwivedi/" target="_blank">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a> 
                    <a className="icon" href="https://leetcode.com/ayush_kt05/" target="_blank">
                        <span className="icon">
                            <SiLeetcode />
                        </span>
                    </a> 
                    <a className="icon" href="https://github.com/Maverick0507" target="_blank">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </a> 
                    
                   
                </div>
      </div>
    </div>
  </div>
);

export default App;
