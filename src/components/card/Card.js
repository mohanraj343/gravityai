import React from 'react';
import classes from "./card.module.css";

export default function Card({data}) {
  return (
    <div className={classes.cardContainer}>
        <h4>{data?.author}</h4>
        <h5>{data?.title}</h5>
        <div className={classes.imageContainer}>
            <img src={data?.img} alt='demo_image' />
            <p>{data?.description}</p>
        </div>
        <p className={classes.dateLabel}>{data?.date}</p>
    </div>
  )
}
