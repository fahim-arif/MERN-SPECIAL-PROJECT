import { React, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TutorBox from "./TutorBox";
import { listTutors } from "../../actions/tutorActions";
import Loader from "../common/Loader";
import Message from "../common/Message";
import Paginate from "./Paginate";
import "../../css/TutorLister.css";

function TutorLister({ pageNumber, tutorType }) {
  const dispatch = useDispatch();

  const tutorList = useSelector((state) => state.tutorList);

  const { tutors, error, loading, page, pages, keyword } = tutorList;

  useEffect(
    () => [dispatch(listTutors("", pageNumber, tutorType))],
    [dispatch, pageNumber, tutorType]
  );

  console.log(tutors);

  // const selectedTutors= tutors.filter((t)=>{
  //     return t.type===selectorTutorType;
  // })

  // const filteredTutors= selectedTutors.filter((tutor)=>{
  //     return selectedTutors.indexOf(tutor)>= (pageNumber-1)*pageSize && selectedTutors.indexOf(tutor)<= pageNumber*pageSize-1
  // })

  // console.log(selectedTutors)

  // console.log(filteredTutors)

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Container>
          <Row className='tutor__wrapper__home'>
            {tutors.map((tutor) => (
              <Col key={tutor._id} xs={6} sm={6} md={3} lg={3} xl={3}>
                <TutorBox tutor={tutor} />
              </Col>
            ))}
          </Row>

          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
            tutorType={tutorType}
          />
        </Container>
      )}
    </>
  );
}

export default TutorLister;
