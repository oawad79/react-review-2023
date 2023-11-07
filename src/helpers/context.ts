import React from "react";
import navValues from "./navValues";

const navigationContext = React.createContext<ContextProps>({current: navValues.home});

export {navigationContext, navValues};