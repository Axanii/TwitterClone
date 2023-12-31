'use client'
import { IconButton, Typography, Avatar, Button } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import moment from 'moment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import ProfileHeaderCategories from '../components/ProfileHeaderCategories';

let registrationDate = moment().format('[Joined] MMMM Do YYYY').toString()

const data = {
    firstName: "Maxim",
    lastName: "Axanii",
    username: "@Queshnyan",
    registrationDate: registrationDate
}
const backgroundImageUrl = "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg"

const Profile = () => {


    const [activeTab, setActiveTab] = useState<string>('')

    return (
        <main className='border-r-[0.5px] border-r-gray-600 w-[600px] max-w-[650px]'>
            <div className='flex items-center pl-2 mb-2'>
                <Link href="/home">
                    <IconButton sx={{
                        padding: 1,
                        marginTop: 1,
                    }}
                        className='hover:bg-[#293640] mr-4'
                    >
                        <ArrowBackIcon
                            className='text-white rounded-full text-[20px] font-bold'
                        />

                    </IconButton>
                </Link>
                <Typography variant="h6" className='font-bold'>{`${data.firstName} ${data.lastName}`}</Typography>
            </div>
            <img src={backgroundImageUrl} className='h-44 w-full'></img>
            <div className='flex justify-between'>
                <Avatar sx={{
                    width: 120,
                    height: 120,
                    position: 'absolute',
                    transform: 'translateY(-50%)',
                    marginLeft: 2,
                }}
                    className='border-4 border-[#15202b]' />

            </div>
            <Button className='text-white font-bold bg-[15202b] rounded-full border-gray-600 capitalize float-right'
                sx={{
                    border: 0.5,
                    borderColor: "gray",
                    marginTop: 1,
                    marginRight: 1,
                    padding: 1,
                }}
            >Edit profile</Button>
            <div className='flex flex-col mt-16'>
                <span className='px-4 font-bold text-xl'>{`${data.firstName} ${data.lastName}`}</span>
                <span className='text-gray-400 text-base px-4'>{data.username}</span>
                <div className='text-base text-gray-400 pt-4 px-4 mb-4'>
                    <CalendarMonthIcon sx={{
                        fontSize: 'medium',
                        marginRight: 1,
                    }} />
                    {data.registrationDate}
                </div>
            </div>
            <div className='border-b-[0.5px] border-b-slate-500'>
                <ProfileHeaderCategories />
            </div>
        </main>
    )
}


export default Profile