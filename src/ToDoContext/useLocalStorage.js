import React from "react"


/*--------------CustomHooks------------------*/
function useLocalStorage(ItemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue)        
    /*-------------UseEffect--------------------------*/
    React.useEffect(()=>{
      setTimeout(()=>{
    /*-------creacion de localStorage--------*/
        try{
          const localStorageItem = localStorage.getItem(ItemName); 
          let parsedItem;
  
          if (!localStorageItem){
            localStorage.getItem(ItemName, JSON.stringify(initialValue));
            parsedItem = initialValue; 
          } else {
            parsedItem = JSON.parse(localStorageItem)
          }
          setItem(parsedItem);
          setLoading(false);
          }catch(err){
            setError(true)
          }
        
      }, 1000)
    }, [])
    
  
  
  /*-------Guardando las tareas-------*/
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem); 
        localStorage.setItem(ItemName, stringifiedItem)
        setItem(newItem);
      } catch (error) {
        setError(true)
      }
    };
    return{ 
      item,
      saveItem,
      loading,
      error,
   };
  }

  export { useLocalStorage }