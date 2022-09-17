import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App= ()=> {
  const pageSize=5;
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
      />
        <Switch>
          <Route exact path="/">
          <News setProgress={setProgress}  key="general" pageSize={9} country="in" category="general"/>
          </Route>
          <Route exact path="/health">
          <News setProgress={setProgress}  key="health" pageSize={9} country="in" category="health"/>
          </Route>
          <Route exact path="/Business">
          <News setProgress={setProgress} key="Business" pageSize={9} country="in" category="Business"/>
          </Route>
          <Route exact path="/entertainment">
          <News setProgress={setProgress} key="entertainment" pageSize={9} country="in" category="entertainment"/>
          </Route>
          <Route exact path="/technology">
          <News setProgress={setProgress} key="technology" pageSize={9} country="in" category="technology"/>
          </Route>
        </Switch>
        </Router>
      </div>
    )

}
export default App;
// 68f61572eea34c3bac2f87976d1a42aa