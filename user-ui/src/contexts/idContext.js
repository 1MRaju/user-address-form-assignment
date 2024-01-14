const { createContext, useState, useContext } = require("react");

const idContext = createContext();

export const IdProvider = ({children}) => {
  const [selectedId, setSelectedId] = useState(null);

  const updateId = (id) => {
       setSelectedId(id);
  }

return (
  <idContext.Provider value = {{selectedId, updateId}}>
     {children}
  </idContext.Provider>
)
}

export const useId = () => {
  const context = useContext(idContext);
  if(!context){
    throw new Error('useId must be used within an IdProvider');
  }
  return context;
}

