import * as types from "./actiontype";
import axios from "axios";
const getMusicRecordRequest = () => {
  return { type: types.GET_MUSIC_RECORD_REQUEST };
};
const getMusicRecordSuccess = (payload) => {
  return { type: types.GET_MUSIC_RECORD_SUCCESS, payload };
};
const getMusicRecordFailure = () => {
  return { type: types.GET_MUSIC_RECORD_REQUEST };
};
export const getMusicRecord = (queryParams) => (dispatch) => {
  dispatch(getMusicRecordRequest());
  return axios
    .get("http://localhost:8080/albums", queryParams)
    .then((r) => {
      dispatch(getMusicRecordSuccess(r.data));
    })
    .catch((e) => {
      dispatch(getMusicRecordFailure());
    });
};
//UPDAING MUSIC
const updateMusicRequest = () => {
  return { type: types.UPDATE_MUSIC_REQUEST };
};
const updateMusicSuccess = (payload) => {
  return { type: types.UPDATE_MUSIC_SUCCESS, payload };
};
const updateMusicFailure = () => {
  return { type: types.UPDATE_MUSIC_FAILURE };
};
// update dispatch function.
export const updateMusicRecord = (id, payload) => (dispatch) => {
  dispatch(updateMusicRequest());
  return axios
    .patch("http://localhost:8080/albums/" + id, payload)
    .then((r) => {
      dispatch(updateMusicSuccess(r.data));
      // console.log("update response::", r);
    })
    .catch((e) => {
      dispatch(updateMusicFailure());
      //console.log("update,error::", e);
    });
};
