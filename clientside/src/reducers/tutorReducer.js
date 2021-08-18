import {
  SINGLE_TUTOR_LIST_FAIL,
  SINGLE_TUTOR_LIST_REQUEST,
  SINGLE_TUTOR_LIST_SUCCESS,
  TUTOR_LIST_FAIL,
  TUTOR_LIST_REQUEST,
  TUTOR_LIST_SUCCESS,
} from "../constants/tutorConstants";

const initialState = {
  tutors: [],
  loading: false,
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

const singleTutorInitialState = {
  tutorDetails: {
    basic_info: {
      reg_time: {},
    },
    tution_info: {
      preffered_classes: [],
      preffered_subject: [],
      preffered_area: {
        area: [],
      },
    },
    educational_info: {
      ssc: [],
      hsc: [],
      honors: [],
    },
  },
};

export const getSingleTutorReducer = (
  state = singleTutorInitialState,
  action
) => {
  switch (action.type) {
    case SINGLE_TUTOR_LIST_REQUEST:
      return { loading: true, tutorDetails: {} };

    case SINGLE_TUTOR_LIST_SUCCESS:
      return {
        loading: false,
        tutorDetails: action.payload.tutor,
      };

    case SINGLE_TUTOR_LIST_FAIL:
      return { loading: false, error: action.payload };

    default: {
      return {
        ...state,
      };
    }
  }
};
