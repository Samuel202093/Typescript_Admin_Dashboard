import { HiViewGridAdd, HiTemplate } from "react-icons/hi";
import { MdTipsAndUpdates, MdPayment, MdAddCircle, MdManageAccounts } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";
import { ImUser } from "react-icons/im";

import sweatshirt from "../assets/black_sweatshirt.jpeg"
import cap  from "../assets/cap.jpeg"
import grayHoodie from "../assets/gray_hoodie.jpeg"
import tShirt from "../assets/t-shirt.jpeg"
import addidas from "../assets/addidasJoggers.jpeg"
import nike from "../assets/nikeJoggers.jpeg"
import nikeShoe from "../assets/nike.avif"
import gucci from "../assets/gucci.avif"
import zara from "../assets/zara.avif"



export const accountLinks = [
{
    id: 1,
    name: "Overview",
    Icon: HiViewGridAdd,
    path : "overview"
},
{
    id: 2,
    name: "Updates",
    Icon: MdTipsAndUpdates,
    path: "updates"
},
{
    id: 3,
    name: "Payment",
    Icon: MdPayment,
    path: "payments"
},
{
    id: 4,
    name: "My Order",
    Icon: BsCartCheckFill,
    path: "orders"
}
]


export const productLinks = [
    {
        id: 1,
        name: "Add New",
        Icon: MdAddCircle,
        path: "add-product"
        
    },
    {
        id: 2,
        name: "My Product",
        Icon: HiTemplate,
        path: "products"
    }
]


export const adminLinks = [
    {
        id: 1,
        name: "Admin Settings",
        Icon: IoSettings,
        path: "settings"
    },
    {
        id: 2,
        name: "Manage User",
        Icon: MdManageAccounts,
        path: "users"
    },
    {
        id: 3,
        name: "Logout",
        Icon: IoLogOut,
        path: "/"
    }
]

export const Products = [
    {
        id: 1,
        name: "Nike",
        price: 205.57,
        quantity: 20,
        img: nikeShoe,
        description: "Walking on air with Nike",
        Icon: RxDotFilled
    },
    {
        id: 2,
        name: "Zara",
        price: 300.17,
        quantity: 15,
        img: zara,
        description: "Exceedingly Good Fragance",
        Icon: RxDotFilled
    },
    {
        id: 3,
        name: "Gucci",
        price: 205.57,
        quantity: 20,
        img: gucci,
        description: "Luxury Designer Bag",
        Icon: RxDotFilled
    },
    {
        id: 4,
        name: "Addidas Joggers",
        price: 25,
        quantity: 10,
        img: addidas,
        description: "Classic Comfort Fit Joggers",
        Icon: RxDotFilled
    },
    {
        id: 5,
        name: "Nike Joggers",
        price: 79,
        quantity: 25,
        img: nike,
        description: "Classic Comfort Drawstring Joggers",
        Icon: RxDotFilled
    },
    {
        id: 6,
        name: "Fred T-Shirt",
        price: 700,
        quantity: 12,
        img: tShirt,
        description: "Majestic Mountain Graphic",
        Icon: RxDotFilled
    },
    {
        id: 7,
        name: "Polo Cap",
        price: 85,
        quantity: 10,
        img: cap,
        description: "Classic Navy Blue Baseball",
        Icon: RxDotFilled
    },
    {
        id: 8,
        name: "Hoodie",
        price: 90,
        quantity: 15,
        img: grayHoodie,
        description: "Classic Heather Gray Hoodie",
        Icon: RxDotFilled
    },
    {
        id: 9,
        name: "Sweat Shirt",
        price: 75,
        quantity: 25,
        img: sweatshirt,
        description: "Classic Black Hooded Sweatshirt",
        Icon: RxDotFilled
    }
]

export const users = [
    {
        id: 1,
        username: "John Doe",
        email: "johndoe@gmail.com",
        Icon: ImUser,
        Suspend: RiUserUnfollowFill,
        Unsuspend: RiUserFollowFill
    },
    {
        id: 2,
        username: "Mark Lawson",
        email: "marklawson@gmail.com",
        Icon: ImUser,
        Suspend: RiUserUnfollowFill,
        Unsuspend: RiUserFollowFill
    },
    {
        id: 3,
        username: "Christopher Nkunku",
        email: "nkunku@gmail.com",
        Icon: ImUser,
        Suspend: RiUserUnfollowFill,
        Unsuspend: RiUserFollowFill
    },
    {
        id: 4,
        username: "Nicolas Jackson",
        email: "jackson@gmail.com",
        Icon: ImUser,
        Suspend: RiUserUnfollowFill,
        Unsuspend: RiUserFollowFill
    },
    {
        id: 5,
        username: "James Reece",
        email: "reece@gmail.com",
        Icon: ImUser,
        Suspend: RiUserUnfollowFill,
        Unsuspend: RiUserFollowFill
    },
    {
        id: 6,
        username: "Victor Oshimen",
        email: "osihmen@gmail.com",
        Icon: ImUser,
        Suspend: RiUserUnfollowFill,
        Unsuspend: RiUserFollowFill
    },
    {
        id: 7,
        username: "Jose Mourinho",
        email: "mourinho@gmail.com",
        Icon: ImUser,
        Suspend: RiUserUnfollowFill,
        Unsuspend: RiUserFollowFill
    },
    {
        id: 8,
        username: "Gundogan",
        email: "gundogan@gmail.com",
        Icon: ImUser,
        Suspend: RiUserUnfollowFill,
        Unsuspend: RiUserFollowFill
    },
    {
        id: 9,
        username: "Kelvin Debruyne",
        email: "debruyne@gmail.com",
        Icon: ImUser,
        Suspend: RiUserUnfollowFill,
        Unsuspend: RiUserFollowFill
    },
    {
        id: 10,
        username: "Bernado Silva",
        email: "silva@gmail.com",
        Icon: ImUser,
        Suspend: RiUserUnfollowFill,
        Unsuspend: RiUserFollowFill
    }
]


export const myOrders = [
    {
        id: 1,
        name: "Nike",
        email: "johndoe@gmail.com",
        transcationId: "Mer-3456 - 10",
        date: "Jan 30, 2021",
        time: "1:00PM",
        amount: 345,
        status: "delivered",
        Icon: RxDotFilled
    },
    {
        id: 2,
        name: "Zara",
        email: "silva@gmail.com",
        amount: 500,
        date: "Mar 12, 2021",
        time: "09:30AM",
        transcationId: "Pay-9087 -25",
        status: "pending",
        Icon: RxDotFilled
    },
    {
        id: 3,
        name: "Addidas",
        email: "debruyne@gmail.com",
        date: "Dec 31, 2021",
        time: "02:05PM",
        amount: 950,
        transcationId: "Mer-0934 - 09",
        status: "delivered",
        Icon: RxDotFilled
    },
    {
        id: 4,
        name: "Hoodie",
        email: "reece@gmail.com",
        date: "Oct 11, 2021",
        time: "11:00AM",
        amount: 1500,
        transcationId: "Pay-8067 - 23",
        status: "delivered",
        Icon: RxDotFilled
    },
    {
        id: 5,
        name: "Polo Cap",
        amount: 150,
        transcationId: "Mer-8963 - 89",
        date: "Jun 10, 2021",
        time: "03:30AM",
        email: "marklawson@gmail.com",
        status: "pending",
        Icon: RxDotFilled
    }
]

export const payment = [
    {
        id: 1, 
        product_name: "Polo Cap",
        email: "marklawson@gmail.com",
        amount: 150,
        transcationId: "Mer-8963 - 89",
        Icon: RxDotFilled
    },
    {
        id: 2,
        product_name: "Hoodie",
        email: "reece@gmail.com",
        amount: 1500,
        transcationId: "Pay-8067 - 23",
        Icon: RxDotFilled
    },
    {
        id: 3,
        product_name: "Addidas",
        email: "debruyne@gmail.com",
        amount: 950,
        transcationId: "Mer-0934 - 09",
        Icon: RxDotFilled
    },
    {
        id: 4,
        product_name: "Zara",
        email: "silva@gmail.com",
        amount: 500,
        transcationId: "Pay-9087 -25",
        Icon: RxDotFilled
    }
]


export const adminLogin = [{
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@gmail.com",
    password: "johndoe123"
}]

















