import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
const Navbar = () =>{
    return(
      <nav className={s.nav}>
        <NavLink to="/profile" activeClassName={s.active} className={s.item}>
          profile
        </NavLink>
        <NavLink to="/dialogs" activeClassName={s.active} className={s.item}>
          dialogs
        </NavLink>
      </nav>
    );
}

export default Navbar;