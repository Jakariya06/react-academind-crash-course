import React, { useContext } from "react";
import {Link} from "react-router-dom"
import FavoritesContext from "../../store/favorites-context";
import classes from '../layout/MainNav.module.css'

function MainNav() {

  const favContext = useContext(FavoritesContext)
 
  return (

    <header className={classes.header}>

    <Link to="/"> <div className={classes.logo}> JackMeet</div> </Link>
  
      <nav>
          <ul>
              <li> <Link to="/"> All MeetUps </Link> </li>
              <li> <Link to="/new"> New MeetUps </Link> </li>
              <li> <Link to="/favorite"> Favorite <span className={classes.badge}>{favContext.totalFavorites}</span> </Link> </li>
          </ul>
      </nav>

    </header>
  );
}

export default MainNav;
