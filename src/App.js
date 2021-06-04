import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import AnsweredQuestionsDetails from "./pages/AnsweredQuestionsDetails";
import UnAnswered from "./pages/UnAnsweredDetails";

import NewQuestion from "./pages/NewQuestion";
import LeaderBoard from "./pages/LeaderBoard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Nav />
            <Home />
          </Route>
          <Route exact path="/">
            <Nav />
            <Login />
          </Route>
          <Route exact path="/question/:id">
            <Nav />
            <AnsweredQuestionsDetails />
          </Route>
          <Route exact path="/unansweredquestion/:id">
            <Nav />
            <UnAnswered />
          </Route>
          <Route exact path="/add">
            <Nav />
            <NewQuestion />
          </Route>
          <Route exact path="/leaderboard">
            <Nav />
            <LeaderBoard />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
