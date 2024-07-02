import { verifyToken } from '@/app/actions'
import React from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import LogoutBtn from './LogoutBtn'


export default async function Navbar() {
    const user:any = await verifyToken()
    
    return (
        <div className='p-4 px-8 flex justify-between items-center bg-[#E0E0E0] z-10 fixed top-0 w-full max-w-screen shadow'>
            <h2 className='text-2xl font-bold'>Dummy store</h2>
            <div className="flex gap-4 items-center justify-center">
                {user ? (
                    <>
                    <div className="size-10 font-bold bg-[#eee] select-none flex items-center justify-center rounded-full ring-1">
                        {user.name.split("")[0]}
                    </div>
                    <LogoutBtn />
                    </>

                ) : <Link className={buttonVariants()} href="/login">
                    Login
                </Link>
                }
            </div>
        </div>
    )
}
