import './App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profiles/:username" element={<Profile/>}/>
        </Route>
        <Route path="/articles" element={<Articles/>}>
          <Route path=":id" element={<Article/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
