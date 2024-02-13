import { createContext, useContext, useState } from 'react';
import { ContainerProps, AppContextType} from '../Types/interface';
import { payment, myOrders } from '../datas/data';






// Create a context with an initial value
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Custom hook to access the context value
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

// Component to provide the context
export const AppContextProvider = ( props:ContainerProps ) => {

  const totalSum = payment.reduce((x, y)=> x + y.amount, 0)

  const [isOpenReport, setIsOpenReport] = useState<boolean>(false);
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false)
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [withdrawValue, setIsWithdrawValue] = useState<number | undefined>(undefined)
  const [balance, setBalance] = useState<number>(totalSum)


  const toggleOpenReport = () => {
    setIsOpenReport((prevMode) => !prevMode);
  };

  const toggleCloseReport = () =>{
    setIsOpenReport((prevMode) => !prevMode);
  }

  const toggleMobileOpen = ()=>{
    setIsOpenMobile((prevMode) => !prevMode);
  }

  const pendingBalance = myOrders.filter((x)=>{
    if (x.status === 'pending') {
        return x
    }
  }).reduce((x, y)=> x + y.amount, 0)

 

  const handleWithdrawal = ()=>{
  let output 
  const defaultValue = 0
  output = totalSum - (withdrawValue ?? defaultValue)
  return setBalance(output);
}
 



  return (
    <AppContext.Provider value={{isOpenReport, isOpenMobile, toggleMobileOpen, toggleOpenReport, toggleCloseReport, setIsOpenMobile, isAuth, setIsAuth, totalSum, balance, setBalance, pendingBalance, withdrawValue,setIsWithdrawValue, handleWithdrawal}}>
      {props.children}
    </AppContext.Provider>
  );
};



