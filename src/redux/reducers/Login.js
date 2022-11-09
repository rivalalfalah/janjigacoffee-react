import actionStrings from "../actions/actionString.js";
 

if (!localStorage.token) {
  const isLogin = false
  return isLogin 
};

const isLoginReducer = (prevState = isLogin.intialState, action) => {
  switch (action.type) {
    case actionStrings.Login:
      return {
        prevState: true,
      };
    case actionStrings.LogOut:
      return {
        prevState: false,
      };
      default : return prevState
  }
};

export default isLoginReducer
