// import React from 'react';

// function Feature() {
//     return (
//         <section>
//             <h1>Features</h1>
//             <p>Details about features.</p>
//         </section>
//     );
// }

// export default Feature;



import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/rhyno_homepg.jpeg';
import fimage2 from '../images/rhyno_logo.jpeg';
import fimage3 from '../images/ry.jpeg';

function Feature() {
  return (
    <div id='features'>
        <h1> FEATURES</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title="ev scooteers"/>
            <Featurebox image={fimage2} title="rhyno evs"/>
            <Featurebox image={fimage3} title="eco-freindly"/>
            </div>

    </div>

  )
}

export default Feature