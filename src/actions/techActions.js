import { SET_LOADING, GET_TECHS, TECHS_ERROR, ADD_TECH } from "./types";

//Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await fetch("/techs");

    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Add tech
export const addTech = (tech) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Set loading to True
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
