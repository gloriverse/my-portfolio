import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" exact />
        <Route component={SinglePost} path="/post/:slug" exact />
        <Route component={Post} path="/post" exact />
        <Route component={Project} path="/project" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
