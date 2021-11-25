import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoadings();

//     const res = await fetch("/logs");
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

//Get logs from Server
export const getLogs = () => async (dispatch) => {
  try {
    dispatch(setLoadings());

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//SET Loading to True
export const setLoadings = () => {
  return {
    type: SET_LOADING,
  };
};
