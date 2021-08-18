import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "../css/IndividualTutorScreen.css";
import "../css/IndividualTutorChatBox.css";
import LeftSider from "../components/IndividualTutorScreenPage/LeftSider";
import RightSider from "../components/IndividualTutorScreenPage/RightSider";
import ChatBox from "../components/IndividualTutorScreenPage/ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTutor } from "../actions/tutorActions";
import Loader from "../components/common/Loader";

function TutorScreen({ match }) {
  /* getting tutor details */

  const dispatch = useDispatch();

  const tutorInfo = useSelector((state) => state.tutorInfo);

  const { tutorDetails, loading } = tutorInfo;

  useEffect(() => {
    dispatch(getSingleTutor(match.params.id));
  }, [dispatch, match.params.id]);

  /* chatBox open and close action */
  const [chatstrtButton, setChatstrtButton] = useState(false);
  const chatButtonRef = useRef("chatStartButton");

  const chatContainerRef = useRef("chatContainerRef");

  const changeState = (state) => {
    setChatstrtButton(state);
    var node = ReactDOM.findDOMNode(chatButtonRef.current);
    node && node.classList.toggle("d-none");
  };

  useEffect(() => {
    var node2 = ReactDOM.findDOMNode(chatContainerRef.current);
    node2 && node2.classList.toggle("d-none");
  }, [chatstrtButton, chatContainerRef]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='tutor_screen'>
          <div className='container'>
            <div className='row'>
              <div className='row'>
                {console.log(tutorDetails.basic_info)}

                <div className='col-md-8 tutorScreen__leftSide  animate__animated animate__backInLeft'>
                  <LeftSider detailsTutor={tutorDetails} />
                </div>

                <div className='col-md-4 mt-2'>
                  <RightSider tutor={tutorDetails} />
                </div>
              </div>
            </div>
          </div>

          <ChatBox
            tutorDetails={tutorDetails}
            chatContainerRef={chatContainerRef}
            changeState={changeState}
          />

          <a
            ref={chatButtonRef}
            class='btn-primary btn chatStartBtn'
            onClick={() => {
              changeState(true);
            }}
          >
            Chat with Tutor
          </a>
        </div>
      )}
    </>
  );
}

export default TutorScreen;
