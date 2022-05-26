import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Agenda</Link>
          </li>
          <li>
            <Link to="/create">Add Number</Link>
          </li>
          {/* <li>
            <Link to="/edit">Edit Number</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout
