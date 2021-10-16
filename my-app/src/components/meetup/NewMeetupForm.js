import React from 'react'
import { useRef } from 'react';
import Card from '../UI/Card'
import classes from '../meetup/NewMeetupForm.module.css'

export default function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const meetupData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            desc : enteredDesc
        }

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmit}>

                <div className={classes.control}>
                    <label htmlFor="title"> Meetup Title </label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="image"> Meetup Image </label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="address"> Address </label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="desc"> Meetup Description </label>
                    <textarea id="desc" rows="5" required ref={descInputRef}></textarea>
                </div>

                <div className={classes.actions}>
                    <button> Add Meetup</button>
                </div>

            </form>
        </Card>
    )
}
