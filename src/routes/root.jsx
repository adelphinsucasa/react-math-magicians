import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id="topbar">
        <h1>Math Magicians</h1>
        <nav>
          <ul id="buttonsbar">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li id="itemCenter">
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
