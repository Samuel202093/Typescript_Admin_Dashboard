// type for auth context
export interface AuthType{
    admin:{} | null,
    login: () => void;
    logout: () => void;
}

export interface Admin{
    firstname?:string,
    lastname?: string,
    email: string,
    password: string
}

// export interface AuthProps {
//     children: React.ReactNode
// }


// type for product context
export interface ContainerProps {
    children: React.ReactNode
}

export interface RequireProps{
    children: React.ReactNode
}

export interface AppContextType {
    isOpenReport: boolean;
    isOpenMobile: boolean;
    isAuth: boolean;
    totalSum: number;
    pendingBalance: number;
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    // setBalance: Dispatch<SetStateAction<number>>;
    withdrawValue: number | undefined;
    setIsWithdrawValue: React.Dispatch<React.SetStateAction<number | undefined>>;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenMobile: React.Dispatch<React.SetStateAction<boolean>>;
    toggleOpenReport: () => void;
    toggleCloseReport: () => void;
    toggleMobileOpen: () => void;
    handleWithdrawal: () => void;
    // handleWithdrawal: () =>  React.Dispatch<React.SetStateAction<number>>;
 }


 // type declaration for chart component
 export type ChartType ={
    labels: Array<string>,
    datasets:Array<{
        label: string,
        data:Array<number>,
        backgroundColor: string,
        borderColor: string
        borderWidth: number,
        tension: number,
        pointRadius: number
    }>
 
}

// type for login page form
export type LoginType = {
    email: string,
    password: string
}


// type for admin settings page form
export type AdminSettingsType = {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}


// type for add product page form
export type AddProductType = {
    productName: string,
    price: string,
    quantity: string,
    // image: string,
    description: string
}