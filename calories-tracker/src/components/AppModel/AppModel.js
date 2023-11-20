import React from 'react'

const AppModel = ({setOpenModel}) =>{
  return (
    <div className="app__model">
        <h3>Calories Must Be Bigger Than 0 and Meal Name Can Not be Blank</h3>
        <button className="btn__close__model" onClick={()=> setOpenModel(false)}>Close</button>
    </div>
  );
}

export default AppModel;