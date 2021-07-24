import axios from "axios";
import {
  TUTOR_LIST_FAIL,
  TUTOR_LIST_REQUEST,
  TUTOR_LIST_SUCCESS,
} from "../constants/tutorConstants";

export const listTutors =
  (keyword = "", pageNumber, tutorType) =>
  async (dispatch) => {
    if (!tutorType) {
      tutorType = "Platinum";
    }

    try {
      dispatch({ type: TUTOR_LIST_REQUEST });

      const { data } = await axios.get(
        `/api/tutors?keyword=${keyword}&pageNumber=${pageNumber}&tutorType=${tutorType}`
      );

      console.log("Type:" + tutorType);
      console.log(data);

      dispatch({
        type: TUTOR_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TUTOR_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
