import React from "react";

const BootcampsContext = React.createContext({
  bootcamps: [],
  addBootcamp: () => {},
})

export default BootcampsContext;