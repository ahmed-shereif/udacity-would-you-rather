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
import ProtectedRoute from "./ProtectedRoute";
import ProtectedQ from "./ProtectedQ";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <ProtectedRoute exact path="/home" component={Home} />
          <Route exact path="/">
            <Login />
          </Route>

          <ProtectedRoute
            exact
            path="/question/:id"
            component={AnsweredQuestionsDetails}
          />

          <ProtectedRoute
            exact
            path="/unansweredquestion/:id"
            component={UnAnswered}
          />

          <ProtectedRoute exact path="/add" component={NewQuestion} />

          <ProtectedRoute exact path="/leaderboard" component={LeaderBoard} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
