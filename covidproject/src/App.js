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

  const togglePopupBeta = () => {
    setIsOpenBeta(!isOpenBeta);
  }

  const togglePopupGamma = () => {
    setIsOpenDelta(!isOpenGamma);
  }

  const togglePopupDelta = () => {
    setIsOpenDelta(!isOpenDelta);
  }

  return <div class="main-div">
    <img src="covid.png" alt="Coronavirus Illustration" id="covid"></img>
    <input
      type="button"
      value="α"
      onClick={togglePopupAlpha}
      id="alpha"
      class="concern"
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
    <input
      type="button"
      value="β"
      onClick={togglePopupBeta}
      id="beta"
      class="concern"
    />
    {isOpenBeta && <Popup
      content={<>
        <b>{beta.name} </b><br></br>
        <b>Lineage: {beta.lineage}</b>
        <p>Key Mutations: </p>
        {beta.mutations.map((value, index) => {return <li>{value}</li>})}
        <p>{beta.info}</p>
        <p>Sources:</p>
        {
          beta.sources.map((value,index) => {return <a href={value}>{value}<br /></a>})
        }
      </>}
      handleClose={togglePopupBeta}
    />}
    <input
      type="button"
      value="Γ"
      onClick={togglePopupGamma}
      id="gamma"
      class="concern"
    />
    {isOpenGamma && <Popup
      content={<>
        <b>{gamma.name} </b><br></br>
        <b>Lineage: {gamma.lineage}</b>
        <p>Key Mutations: </p>
        {gamma.mutations.map((value, index) => {return <li>{value}</li>})}
        <p>{gamma.info}</p>
        <p>Sources:</p>
        {
          gamma.sources.map((value,index) => {return <a href={value}>{value}<br /></a>})
        }
      </>}
      handleClose={togglePopupGamma}
    />}
    <input
      type="button"
      value="Δ"
      onClick={togglePopupDelta}
      id="delta"
      class="concern"
    />
    {isOpenDelta && <Popup
      content={<>
        <b>{delta.name} </b><br></br>
        <b>Lineage: {delta.lineage}</b>
        <p>Key Mutations: </p>
        {delta.mutations.map((value, index) => {return <li>{value}</li>})}
        <p>{delta.info}</p>
        <p>Sources:</p>
        {
          delta.sources.map((value,index) => {return <a href={value}>{value}<br /></a>})
        }
      </>}
      handleClose={togglePopupDelta}
    />}
  </div>
}

export default App;