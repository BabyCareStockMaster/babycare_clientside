import { IoGridOutline, IoHomeOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";

export default [
    {
        to: '/',
        name: 'Dashboard',
        Icon: IoHomeOutline
    },
    {
        to: '/profile',
        name: 'User',
        Icon: BiUserCircle
    },
    {
        to: '/warehouse',
        name: 'Warehouse',
        Icon: BsSpeedometer2
    },
    {
        to: '/orders',
        name: 'Order',
        Icon: IoGridOutline
    },
    {
        to: '/products',
        name: 'Products',
        Icon: AiOutlineBarChart
    }
];