import React, { useEffect, useState } from 'react'
import classes from "./dragger.module.css";
import Draggable from 'react-draggable';

export default function DraggerApp() {

    const [droppedData, setDroppedData] = useState([]);

    const cars = [{name : "Maruti", mileage : "40km/ltr"},{name : "Audi", mileage : "40km/ltr"},{name : "Maruti", mileage : "40km/ltr"}]

    const [dropCoordinates, setDropCoordinates] = useState({
        x: 0,
        y :0,
        left:0,
        right:0,
        top:0,
        bottom :0
    });


    
    const handleDrop = (e, type)=>{
        setDroppedData((pre)=>([...pre, {
           value : type ===1 ? "item1": "item2",
           x: e.clientX - 50,
           y:e.clientY - 20,
           index : [[...pre]?.length +1],
        //    properties : getProperties(type);
       }]))
   }

//    const getProperties = (type)=>{

//     return [{
//         key : "Model",
//         value : getCars().model,
    
//     },{
//         key : "Mileage",
//         value : getCars().mileage,
    
//     }]
//    }

//    const get

    useEffect(()=>{
        const dropElement = document.getElementById("dropcontainer");
        if(dropElement){
           const coord =  dropElement.getBoundingClientRect();
            setDropCoordinates(coord);
            console.log(coord, "coordcoordcoordcoord");
        }

    },[])
  return (
    <div className={classes.appcontainer}>
        <div   >
            <h4>Menu</h4>
            <div className={classes.itemContainer}>
                {/* <Draggable onStart={(e)=>{
               const divElem = document.createElement("div");
               divElem.setAttribute("value" , "item1")
                }}> */}
                <div onDragEnd={(e)=>{handleDrop(e,1)}} draggable id='item1'>item 1</div>
                {/* </Draggable> */}
                {/* <Draggable> */}
                <div onDragEnd={(e)=>{handleDrop(e,2)}}  draggable id='item2'>item2
                    </div>
                    {/* </Draggable> */}

            </div>
        </div>
        <div  id='dropcontainer' 
         >
        <h4>Canvas</h4>
      {
        [droppedData?.map((ele)=>{
            return <div style={{
                left : ele?.x,
                top : ele?.y
            }} className={classes.droppedItem}>{ele?.value}</div>
        })]
      }

        </div>
        <div>
        <h4>Properties</h4>

        </div>


    </div>
  )
}
