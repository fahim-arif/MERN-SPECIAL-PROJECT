import {
  TUTOR_LIST_FAIL,
  TUTOR_LIST_REQUEST,
  TUTOR_LIST_SUCCESS,
} from "../constants/tutorConstants";

const initialState = {
  tutors: [],
};

export const tutorListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TUTOR_LIST_REQUEST:
      return { loading: true, tutors: [] };

    case TUTOR_LIST_SUCCESS:
      return {
        loading: false,
        tutors: action.payload.filteredTutors,
        pages: action.payload.pages,
        page: action.payload.page,
        tutorType: action.payload.tutorType,
      };

    case TUTOR_LIST_FAIL:
      return { loading: false, error: action.payload };

    default: {
      return {
        ...state,
      };
    }
  }
};
