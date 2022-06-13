import { Outlet, Link } from "react-router-dom"
import './Layout.css';

export default function Layout() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/aplikacija">Pocetna</Link>
              </li>
              <li>
                <Link to="/unos">Unos</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Outlet />
      </>
    );
}