import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id="topbar">
        <h1>Math Magicians</h1>
        <nav>
          <ul id="buttonsbar">
            <li>
              <Link to="/home/1">Home</Link>
            </li>
            <li id="itemCenter">
              <Link to="/home/2">Calculator</Link>
            </li>
            <li>
              <Link to="/home/3">Quote</Link>
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
