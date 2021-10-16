import React from 'react'
import classes from '../layout/Layout.module.css'
import MainNav from './MainNav'

export default function Layout(props) {
    return (
        <div>
            <MainNav/>
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}
