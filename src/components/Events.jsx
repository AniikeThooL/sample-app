import { useEffect, useState } from "react";


export const Events = ()=>{
    const [minDate,setMinDate] = useState('');
    const [maxDate,setMaxDate] = useState('');

    useEffect(()=>{
        const curr_date = new Date();
        const year = curr_date.getFullYear();
        setMinDate(`${year}-01-01`);
        setMaxDate(`${year}-12-31`);
    },[]);

    return(
        <section className="container events">
            <h1>Events</h1>

            <div className="containerHead">
                <input type="date" className="date-picker" min={minDate} max={maxDate}/>
            </div>
            <div className="events_contents">
                <div className="event_box">1. Lorem Ipsum text as a placeholder</div>
                <div className="event_box">2. Lorem Ipsum text as a placeholder</div>
                <div className="event_box">3. Lorem Ipsum text as a placeholder</div>
            </div>
    
        </section>
    );
}