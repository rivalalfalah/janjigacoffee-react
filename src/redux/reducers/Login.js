import actionStrings from "../actions/actionString.js";
 
const token = localStorage.getItem("token")
const initialState = {
  isLogin:  !token ? false : true
}
const isLoginReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.Login:
      return {
        isLogin: true,
      };
    case actionStrings.LogOut:
      return {
        isLogin: false,
      };
      default : return prevState
  }
};

export default isLoginReducer
