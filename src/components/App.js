import React from 'react';
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import JobSearch from "./search/Search";
import JobList from "./list/List";
import Job from "./show/Job";
import Apply from "./apply/Apply";
import Preview from "./preview/Preview";



function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={JobSearch} />
                <Route exact path="/job-list" component={JobList} />
                <Route path="/job/:jobId" component={Job} />
                <Route path="/apply/:jobId" component={Apply} />
                <Route path="/preview" component={Preview} />
            </div>
        </Router>
    );
}

export default App;
