import React from 'react';
import "./store.css"


function Store(props) {

    // console.log("this is the store", props.store)
  
   const displayList  = props.store && props.store.map((data, index) => {

        return (
            <div className="storeContainer" key={index}>
                <h3>{data.name}</h3>
                <img src={data.imageUrl} alt="Store images"></img>
                <div className='vBucks'>
                <img src="https://img.icons8.com/color/48/000000/v-bucks.png"></img>
                <h3>{data.vBucks}</h3>
                </div>
            </div>
        )
  })
    return (
        <div className="storedisplay">
            {displayList}
        </div>
    );
}

export default Store;
