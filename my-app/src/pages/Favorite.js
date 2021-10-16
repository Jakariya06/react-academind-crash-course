import React, { useContext } from 'react'
import MeetList from '../components/meetup/MeetList';
import FavoritesContext from '../store/favorites-context';

function Favorite() {
    const favContext = useContext(FavoritesContext);

    let content;

    if(favContext.totalFavorites === 0) {
        content = <p>You dont have favorite</p>
    } else {
        content =  <MeetList meetups={favContext.favorites}/> 
    }
    return <section>
        <h1>My Favorit</h1>
        {content}
    </section>
}

export default Favorite
