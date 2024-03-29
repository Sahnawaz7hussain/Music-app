import * as types from "./actiontype";

const initState = {
  musicRecords: [],
  isLoading: false,
  isError: false,
};
export const reducer = (oldState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MUSIC_RECORD_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.GET_MUSIC_RECORD_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        musicRecords: payload,
      };
    case types.GET_MUSIC_RECORD_FAILURE:
      return {
        ...oldState,
        isLoading: false,
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
