import { RESPONSIVE_MARGIN } from "../constants/marginConstants";

export const margin = (spacing) => {
  return {
    type: RESPONSIVE_MARGIN,
    payload: spacing,
  };
};
