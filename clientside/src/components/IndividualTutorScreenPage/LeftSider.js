import React from 'react'
import LeftBottom from './LeftBottom';

import LeftTop from './LeftTop';


function LeftSider({detailsTutor}) {

    


    
    return (
        <div style={{color: 'black'}} > 

          <LeftTop tutorInfo={detailsTutor}/>
          <LeftBottom tutoInformation={detailsTutor}/>
       </div>
    )
}

export default LeftSider
