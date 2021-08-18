import axios from "axios";
import {
  SINGLE_TUTOR_LIST_FAIL,
  SINGLE_TUTOR_LIST_REQUEST,
  SINGLE_TUTOR_LIST_SUCCESS,
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

export const getSingleTutor = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_TUTOR_LIST_REQUEST });

    const { data } = await axios.get(`/api/tuition/tutor/${id}`);

    dispatch({
      type: SINGLE_TUTOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_TUTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
