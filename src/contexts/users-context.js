import React from "react";

const UsersContext = React.createContext({
  users: [],
  addUser: () => {},
})

export default UsersContext;