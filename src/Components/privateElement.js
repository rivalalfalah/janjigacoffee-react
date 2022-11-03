import React from "react";
import { Navigate } from "react-router-dom";

// props.children => mengakses komponen child
class PrivateElement extends React.Component {
  render() {
    // conditional, jika true semua maka return kan komponen child
    // jika false, maka redirect
    // kondisi 1 = apakah sudah login
    const { allowedRoles = [], children } = this.props;
    const userInfo = JSON.parse(localStorage.token || "");
    if (!userInfo)
      return (
        <Navigate
          to="/login"
          replace={true}
          state={{ msg: "Silahkan Login Terlebih Dahulu", isRedirected: true }}
        />
      );
    // kondisi 2 = apakah sesuai dengan role
    if (allowedRoles.length > 0)
      if (!allowedRoles.includes(userInfo.role_id))
        return (
          <Navigate
            to="/"
            replace={true}
            state={{
              msg: "Forbidden",
              isRedirected: true,
            }}
          />
        );
    return children;
  }
}

export default PrivateElement;