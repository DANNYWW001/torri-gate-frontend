import { Children, createContext } from "react";

export const TenantContext = createContext();

const Tenantprovider = ({ Children }) => {
  return <TenantContext.Provider value={{}}>{Children}</TenantContext.Provider>;
};

export default Tenantprovider;
