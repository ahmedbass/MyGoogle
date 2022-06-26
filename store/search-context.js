import { createContext, useState } from "react";

const SearchContext = createContext({ useMock: true });

export const SearchContextProvider = (props) => {
  const [useMock, setIsMock] = useState(true);

  const setToMockResults = () => setIsMock(true);
  const setToRealResults = () => setIsMock(false);
  const toggleMockResults = () => setIsMock(!useMock);
  const setMockOrReal = (mockOrReal) => setIsMock(mockOrReal);

  const context = {
    useMock,
    setToMockResults,
    setToRealResults,
    toggleMockResults,
    setMockOrReal,
  };

  return <SearchContext.Provider value={context}>{props.children}</SearchContext.Provider>;
};

export default SearchContext;
