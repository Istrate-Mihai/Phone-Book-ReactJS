import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="anchor" to="/">Agenda</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout
