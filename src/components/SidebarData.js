import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'


export const SidebarData = [
    {
        title : 'Home',
        path : '/',
        icon : <AiIcons.AiFillHome/>,
        className : 'nav-text'
    },
    {
        title : 'Maps',
        path : '/Maps',
        icon : <FiIcons.FiMapPin/>,
        className : 'nav-text'
    },
    {
        title : 'Charts',
        path : '/ChartsTelemetry',
        icon : <BiIcons.BiLineChart/>,
        className : 'nav-text'
    },
    {
        title : 'Data',
        path : '/TelemetryData',
        icon : <MdIcons.MdDataUsage/>,
        className : 'nav-text'
    },
    {
        title : 'Team',
        path : '/Team',
        icon : <AiIcons.AiOutlineTeam/>,
        className : 'nav-text'
    },
    {
        title : 'Info',
        path : '/Info',
        icon : <FiIcons.FiSettings/>,
        className : 'nav-text'
    },
]