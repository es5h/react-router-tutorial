import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p> This is the First Page</p>
      <Link to="/about"> About </Link>
      <ul>
        <li>
          <Link to="/profiles/data1"> Profile of data1 </Link>
        </li>
        <li>
          <Link to="/profiles/data2"> Profile of data2 </Link>
        </li>
        <li>
          <Link to="/profiles/data3"> Profile of data3 </Link>
        </li>
        <li>
          <Link to="/articles">Article list</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;