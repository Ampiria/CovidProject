import React, { useState } from 'react';
import Popup from './PopUp';
import { alpha,beta,gamma,delta } from './VariantInfo';
function App() {
  const [isOpenAlpha, setIsOpenAlpha] = useState(false);
  const [isOpenBeta, setIsOpenBeta] = useState(false);
  const [isOpenGamma, setIsOpenGamma] = useState(false);
  const [isOpenDelta, setIsOpenDelta] = useState(false);


  const togglePopupAlpha = () => {
    setIsOpenAlpha(!isOpenAlpha);
  }

  return <div class="main-div">
    <img src="covid.png" alt="Coronavirus Illustration" id="covid"></img>
    <input
      type="button"
      value="α"
      onClick={togglePopupAlpha}
      id="alpha"
    />
    {isOpenAlpha && <Popup
      content={<>
        <b>{alpha.name} </b><br></br>
        <b>Lineage: {alpha.lineage}</b>
        <p>Key Mutations: </p>
        {alpha.mutations.map((value, index) => {return <li>{value}</li>})}
        <p>{alpha.info}</p>
        <p>Sources:</p>
        {
          alpha.sources.map((value,index) => {return <a href={value}>{value}<br /></a>})
        }
      </>}
      handleClose={togglePopupAlpha}
    />}

  </div>
}

export default App;