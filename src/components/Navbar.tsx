import { verifyToken } from '@/app/actions'
import React from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import LogoutBtn from './LogoutBtn'


export default async function Navbar() {
    const user: any = await verifyToken()

    return (
        <div className='p-4 px-8 flex justify-between items-center bg-[#1A1B23] z-10 fixed top-0 w-full max-w-screen shadow'>
            <Link href="/">
                <h2 className='text-2xl text-white font-bold'>Classic store</h2>
            </Link>
            <div className="flex gap-4">
                <Link href="/" className='text-white font-semibold' >Home</Link>
                <Link href="/products" className='text-white font-semibold' >Products</Link>
                <Link href="/categories" className='text-white font-semibold' >Categories</Link>
            </div>
            <div className="flex gap-4 items-center justify-center">
                {user ? (
                    <>
                        <div className="flex items-center gap-2">
                            <div className="size-10 font-bold bg-[#eee] select-none flex items-center justify-center rounded-full ring-1">
                                {user.name.split("")[0]}
                            </div>
                            <p className='text-white hidden sm:flex'>{user.name}</p>
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
