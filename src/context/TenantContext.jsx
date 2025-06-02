import { createContext, use, useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { useAppContext } from "../hooks/useAppContext";

export const TenantContext = createContext();

const Tenantprovider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [total, setTotal] = useState(1);
  const { token } = useAppContext();
  const [locValue, setLocValue] = useState("");

  // api call
  const fetchProperties = async () => {
    if (token) {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(
          `/property?page=${page}&location=${locValue}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProperties(data.properties);
        setPage(data.currentPage);
        setTotalPage(data.totalPage);
        setTotal(data.totalProperties);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [token, page, locValue]);
  return (
    <TenantContext.Provider
      value={{
        isLoading,
        properties,
        page,
        setPage,
        totalPage,
        total,
        setLocValue,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
};

export default Tenantprovider;
