import React from 'react'
import classes from "./dashboard.module.css";
import { getBlogs } from '../../utilities/constants';
import Card from '../../components/card/Card';

export default function DashboardApp() {
  return (
    <div className={classes.appcontainer}>
        <div className={classes.cardcontainer}>
       { [...getBlogs()]?.map((card,cardIndex)=>{
            return <Card key={cardIndex} data={card} />
        })}
        </div>
    </div>
  )
}
