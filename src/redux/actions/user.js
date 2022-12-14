import axios from "axios";
const url='https://netflixbackend.onrender.com/netflixBckEnd/v1'
export const register = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });
    const { data } = await axios.post(
      `${url}/register`,
      myForm,
      { withCredentials: true }
    );
    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.error });
  }
};
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.post(
      `${url}/login`,
      { email, password },
      { withCredentials: true }
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.error });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "logOutRequest" });
  try {
    dispatch({ type: "logOutRequest" });
    const { data } = await axios.get(
      `${url}/logout`,
      { withCredentials: true }
    );
    dispatch({ type: "logOutSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "logOutFail", payload: error.response.data.error });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(
      `${url}/me`,
      { withCredentials: true }
    );
    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.error });
  }
};

export const loadAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "loadAllUsersRequest" });

    const { data } = await axios.get(
      `${url}/allusers`,
      { withCredentials: true }
    );
    dispatch({ type: "loadAllUsersSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadAllUsersFail", payload: error.response.data.error });
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });

    const { data } = await axios.delete(
      `${url}/delete/${id}`,
      { withCredentials: true }
    );
    console.log("data in delete all user function", data);
    console.log(data);
    dispatch({ type: "deleteUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "deleteUserFail", payload: error.response.data.error });
  }
};