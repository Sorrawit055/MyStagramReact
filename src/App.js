import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import InformationPhoto from "./pages/InformationPhoto";

const App = () => {//:id ระบุ id
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/home" component={Home} />
        <Route  path="/informationphoto/:id" component={InformationPhoto} />
       </Switch>
    </Router>
  );
};
export default App;