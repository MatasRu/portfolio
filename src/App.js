import './App.css';
import Toolbar from './components/Toolbar'
import Card from "./components/Card";
import About from "./pages/About";
import Resume from "./pages/Resume"
import Works from "./pages/Works"
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Animation from "./components/Animation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { useState } from 'react'


function App() {

    const [getCon, setCon] = useState("about")


    return (
        <Router>

            <div className="background d-flex flex-center">
                <Animation/>
                <div className="main-box d-flex">

                    <Toolbar set={setCon} get={getCon}/>
                    <Card set={setCon}/>
                    <Switch>

                        <Route exact path="/portfolio">
                            <About/>
                        </Route>

                        <Route path="/Resume">
                            <Resume/>
                        </Route>

                        <Route path="/Works">
                            <Works/>
                        </Route>

                        <Route path="/Blog">
                            <Blog/>
                        </Route>

                        <Route path="/Contact">
                            <Contact/>
                        </Route>

                    </Switch>
                </div>
            </div>
        </Router>

    );
}

export default App;
