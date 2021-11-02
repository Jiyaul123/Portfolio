import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';  
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';


function App() {
  return (
    <div className="App">
      <Container className= {'top_60'}> 
        <Grid container spacing={8}>
          <Grid item xs={12} sm = {12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router> 
            <Header />
            <div className = "main_content container_shadow">
              <Switch>
                <Route exact path = '/portfolio'>
                  <Portfolio />
                </Route>
                <Route exact path = '/'>
                  <Resume />
                </Route>
              </Switch>
            </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
     
    </div>
  );
}

export default App;
