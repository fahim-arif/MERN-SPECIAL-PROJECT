import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function LeftBottom({tutoInformation}) {
    return (
        <div >
        <div>
           <div className="tutorScreen__info_heading">
           <h6> <strong className="tutorSceen__subHeading" style={
              {
                 color:'#ffffff'
              }
           }>Tuition Info:</strong> </h6>
           </div>
         
           <div  style={{display:'block'}}>
              
                 
                    <div className="row mt-3">
                       <div className="col-md-4">
                          <strong className="tutorSceen__subHeading">Expected Minimum Salary:</strong>
                       </div>
                       <div className="col-md-8 tutorScreen__leftInfo">
                          <strong className="tutorSceen__subHeading">{tutoInformation.tution_info.expected_min_salary} </strong> tk/month :Negotiable                      
                       </div>
                    </div>
                    <div className="row mt-3">
                       <div className="col-md-4">
                          <strong className="tutorSceen__subHeading"> Current Status for Tuition:</strong>
                       </div>
                       <div className="col-md-8 tutorScreen__leftInfo">
                          {tutoInformation.tution_info.current_status_for_tution}                 
                       </div>
                    </div>
                    <div className="row mt-3">
                       <div className="col-md-4">
                          <strong className="tutorSceen__subHeading">Days per week:</strong>
                       </div>
                       <div className="col-md-8 tutorScreen__leftInfo">
                          {tutoInformation.tution_info.days_per_week} days/week                    
                       </div>
                    </div>
                    <div className="row mt-3">
                       <div className="col-md-4">
                          <strong className="tutorSceen__subHeading">Preffered Tutoring Style:</strong>
                       </div>
                       <div className="col-md-8 tutorScreen__leftInfo">
                       <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 
                           Group Tuition                   
                        <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

                            {tutoInformation.tution_info.prefferef_tutoring_style}           
                       </div>
                    </div>
                    <div className="row mt-3">
                       <div className="col-md-4">
                          <strong className="tutorSceen__subHeading">Place of Learning:</strong>
                       </div>
                       <div className="col-md-8 tutorScreen__leftInfo">
                       <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

                           {tutoInformation.tution_info.place_of_learning} 
                           <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

                            My Place/Home                 	    
                       </div>
                    </div>
                    <div className="row mt-3">
                       <div className="col-md-4">
                          <strong className="tutorSceen__subHeading">Extra Facilities:</strong>
                       </div>
                       <div className="col-md-8 tutorScreen__leftInfo">
                       <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

                           Online Help   
                           <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

                          Phone Help 
                          <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

                          Provide Hands Note                   
                       </div>
                    </div>
                    <div className="row mt-3">
                       <div className="col-md-4">
                          <strong className="tutorSceen__subHeading"> Preferred Medium Of Education:   </strong>
                       </div>
                       <div className="col-md-8 tutorScreen__leftInfo">
                       <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

                           {tutoInformation.tution_info.preffered_medium} Medium   
                           <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

                            English Medium   
                            <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

                             English Version   
                             <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

                              Computer Learning
                       </div>
                    </div>
                    <div className="row mt-3">
                       <div className="col-md-4">
                          <strong className="tutorSceen__subHeading"> Preferred classNamees:   </strong>
                       </div>
                       <div className="col-md-8 tutorScreen__leftInfo">
                          <font id="show_pclassNamees">

                              {tutoInformation.tution_info.preffered_classes.map((cls) => (
                                  <>

<FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

  {cls.toUpperCase()}

                                  </>
                              ))}


                         

                                
                     
                          </font>
                       </div>
                    </div>
                    <div className="row mt-3">
                       <div className="col-md-4">
                          <strong className="tutorSceen__subHeading"> Preferred Subjects:   </strong>
                       </div>
                       <div className="col-md-8 text-left tutorScreen__leftInfo">
                          <font id="show_subjects">
                          {tutoInformation.tution_info.preffered_subject.map((subject) => (
                                  <>

<FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

                            {subject}

                                  </>
                              ))}

                          
                           
                          </font>
                       </div>
                    </div>
                    <div className="row mt-3">
                       <div className="col-md-4">
                          <strong className="tutorSceen__subHeading"> Preferred Areas to Teach:   </strong>
                       </div>
                       <div className="col-md-8 text-left tutorScreen__leftInfo">
                          <font id="pre_disc">
                          <strong> {tutoInformation.tution_info.preffered_area.distict} </strong> <br/> 
                          {
                              tutoInformation.tution_info.preffered_area.area.map((area)=>(
                                  <>
             <FiberManualRecordIcon style={{ fill: "#9e9e9e" ,    marginTop: '5px',  marginBottom: '6px',marginLeft:'2px',width:'.8em',height:'0.8em'}}  /> 

              {area.toUpperCase()}
                                  </>
                              ))
                          }
                          
             
                      
                           

                                 
                          </font>
                       </div>
                    </div>
                 
            
           </div>
           
        </div>
        <div className='mt-3'>
<h5 className="mt-3">Educational Qualification</h5>
<table class="table table-bordered">
<thead className="tutorScreen__table__header">


<tr>
<th>Exam</th>
<th>Subject/Group</th>
<th>Institude</th>
<th>Result</th>
<th>Year</th>
<th>Achievement</th>
</tr>
</thead>
<tbody>



<tr>
<td style={{fontWeight: '500'}}> S.S.C  </td>
<td>
{
tutoInformation.educational_info.ssc[0]
}
</td>
<td>
{
tutoInformation.educational_info.ssc[1]
}
</td>
<td>
{
tutoInformation.educational_info.ssc[2]
}
</td>
<td>
{
tutoInformation.educational_info.ssc[3]
}
</td>

<td>
{
tutoInformation.educational_info.ssc[4]
}
</td>

</tr>
<tr>
<td  style={{fontWeight: '500'}}>H.S.C</td>
<td>
{
tutoInformation.educational_info.ssc[0]
}
</td>
<td>
{
tutoInformation.educational_info.hsc[1]
}
</td>
<td>
{
tutoInformation.educational_info.hsc[2]
}
</td>
<td>
{
tutoInformation.educational_info.hsc[3]
}
</td>

<td>
{
tutoInformation.educational_info.hsc[4]
}
</td>
</tr>


<tr>
<td  style={{fontWeight: '500'}}>Honors</td>
<td>
{
tutoInformation.educational_info.honors[0]
}
</td>
<td>
{
tutoInformation.educational_info.honors[1]
}
</td>
<td>
{
tutoInformation.educational_info.honors[2]
}
</td>
<td>
{
tutoInformation.educational_info.honors[3]
}
</td>

<td>
{
tutoInformation.educational_info.honors[4]
}
</td>
</tr>
</tbody>
</table>
</div>
     </div>
    )
}

export default LeftBottom
