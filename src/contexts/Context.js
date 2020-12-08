import React from "react";

const Context = React.createContext({
  users: [],
  addUser: () => {},
  bootcamps: [],
  addBootcamp: () => {},
})

export default Context;