import * as types from "./actiontype";

const initState = {
  musicRecords: [],
  isloading: false,
  isError: false,
};
export const reducer = (oldState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MUSIC_RECORD_REQUEST:
      return {
        ...oldState,
        isloading: true,
      };
    case types.GET_MUSIC_RECORD_SUCCESS:
      return {
        ...oldState,
        isloading: false,
        isError: false,
        musicRecords: payload,
      };
    case types.GET_MUSIC_RECORD_FAILURE:
      return {
        ...oldState,
        isloading: false,
        isError: true,
        musicRecords: [],
      };
    // case types.UPDATE_MUSIC_REQUEST:
    //   return{
    //     ...oldState,
    //     isloadig:true
    //   }
    default:
      return oldState;
  }
};
