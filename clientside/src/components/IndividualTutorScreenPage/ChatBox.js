import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import MinimizeIcon from '@material-ui/icons/Minimize';

function ChatBox({chatContainerRef,changeState,tutorDetails}) {
    return (
        <div ref={chatContainerRef} className="chatBox d-none animate__animated animate__slideInRight animate__bounceOutRight">
        <div className="chat">
                        <div className="chat-header clearfix">
                          <img src={tutorDetails.image} style={{maxWidth:'50px'}} alt="avatar" />
                          
                          <div className="chat-about">
                            <div className="chat-with"> {tutorDetails.name} </div>
                            <div className="chat-num-messages">already 1 902 messages</div>
                          </div>
                          <MinimizeIcon style={{float: 'right',fontSize: '30px',cursor:'pointer'}} onClick= {()=>{changeState(false)}} />
                        </div> 
                        
                        <div className="chat-history">
                          <ul>
                            <li className="clearfix">
                              <div className="message-data align-right  animate__animated animate__rollIn">
                                <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                                <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
                                
                              </div>
                              <div className="message other-message float-right  animate__animated animate__rollIn">
                                Hi Vincent, how are you? How is the project coming along?
                              </div>
                            </li>
                            
                            <li>
                              <div className="message-data  animate__animated animate__rollIn">
                                <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                                <span className="message-data-time">10:12 AM, Today</span>
                              </div>
                              <div className="message my-message  animate__animated animate__rollIn">
                                Are we meeting today? Project has been already finished and I have results to show you.
                              </div>
                            </li>
                            
                            <li className="clearfix">
                              <div className="message-data align-right  animate__animated animate__rollIn">
                                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
                                <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
                                
                              </div>
                              <div className="message other-message float-right  animate__animated animate__rollIn">
                                Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? 
                              </div>
                            </li>
                            
                            <li>
                              <div className="message-data  animate__animated animate__rollIn">
                                <span className="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
                                <span className="message-data-time">10:20 AM, Today</span>
                              </div>
                              <div className="message my-message  animate__animated animate__rollIn">
                                Actually everything was fine.
                              </div>
                            </li>
    
                            <li className="clearfix">
                              <div className="message-data align-right  animate__animated animate__rollIn">
                                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
                                <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
                                
                              </div>
                              <div className="message other-message float-right  animate__animated animate__rollIn">
                                Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? 
                              </div>
                            </li>
    
    
                            <li>
                              <div className="message-data  animate__animated animate__rollIn">
                                <span className="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
                                <span className="message-data-time">10:20 AM, Today</span>
                              </div>
                              <div className="message my-message  animate__animated animate__rollIn">
                                Actually everything was fine.
                              </div>
                            </li>
    
    
                            <li>
                              <div className="message-data  animate__animated animate__rollIn">
                                <span className="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
                                <span className="message-data-time">10:20 AM, Today</span>
                              </div>
                              <div className="message my-message  animate__animated animate__rollIn">
                                Actually everything was fine.
                              </div>
                            </li>
    
                            <li className="clearfix">
                              <div className="message-data align-right  animate__animated animate__rollIn">
                                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
                                <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
                                
                              </div>
                              <div className="message other-message float-right  animate__animated animate__rollIn">
                                Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? 
                              </div>
                            </li>
    
                            <li className="clearfix">
                              <div className="message-data align-right  animate__animated animate__rollIn">
                                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
                                <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
                                
                              </div>
                              <div className="message other-message float-right  animate__animated animate__rollIn">
                                Well I am not sure. 
                              </div>
                            </li>
                            
                         
                            
                          </ul>
                          
                        </div> 
                        
                        <div className="chat-message clearfix">
                          <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                      
                          <SendIcon style={{ margin:'10px',cursor:'pointer'}}/>
                  
                        </div> 
                        
                      </div>
        </div>
    )
}

export default ChatBox
