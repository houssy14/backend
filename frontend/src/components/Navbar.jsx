import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
     <br /> <Link to="/">HOME</Link>
        <br/><Link to="/search">SEARCH</Link>
        <br /><Link to="/add">ADD</Link>
  </nav>

  )
}

export default Navbar