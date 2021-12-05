import React ,{Suspense , lazy} from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
const About = lazy(() => import('../Pages/About'));
const Home = lazy(() => import('../Pages/Home'));



function Main() {
  return ( 
    <Router className="container">
      <Suspense fallback={<div> Loading...</div> }>
        <div>
          <p> Lets add routing</p>
        </div>
 <Switch>
                  <Route exact path="/home"> <Home /> </Route>
                  <Route path="/about" > <About /> </Route>
           
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Main
