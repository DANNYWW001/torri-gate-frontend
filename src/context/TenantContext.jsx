import {  createContext } from "react";

export const TenantContext = createContext();

const Tenantprovider = ({ children }) => {
  return <TenantContext.Provider value={{}}>{children}</TenantContext.Provider>;
};

export default Tenantprovider;
