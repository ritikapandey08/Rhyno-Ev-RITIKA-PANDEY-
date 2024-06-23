import React from 'react';

function Featurebox(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>differents bikes and cycles with eco-freindly technology</p>
        </div>
    </div>
  )
}

export default Featurebox;