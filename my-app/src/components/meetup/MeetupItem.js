import React, { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
import classes from '../meetup/MeetupItem.module.css'
import Card from '../UI/Card'

function MeetupItem(props) {

    const favContext= useContext(FavoritesContext);
    const itemIsFav = favContext.itemIsFavorites(props.id)

    function toggleFavoriteStatus() {
        if(itemIsFav) {
            favContext.removeFavorites(props.id)
        } else {
            favContext.addFavorites({
                id: props.id,
                image: props.image,
                title: props.title,
                address: props.address,
                desc: props.desc
            })
        }
    }
    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>

            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address> {props.address} </address>
                <p> {props.desc} </p>
            </div>

            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatus}> {itemIsFav ? 'Remove' : 'to Favorite'} </button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem
