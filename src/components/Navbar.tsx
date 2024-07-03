import { verifyToken } from '@/app/lib'
import React from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import LogoutBtn from './LogoutBtn'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'



export default async function Navbar() {
    const user: any = await verifyToken()
    // const user: any = null

    return (
        <div className='p-4 px-8 flex justify-between items-center bg-[#1A1B23] z-10 fixed top-0 w-full max-w-screen shadow'>
            <Link href="/">
                <h2 className='text-2xl text-white font-bold'>Classic store</h2>
            </Link>
            <div className="md:flex gap-4 hidden">
                <Link href="/" className='text-white font-semibold' >Home</Link>
                <Link href="/products" className='text-white font-semibold' >Products</Link>
                <Link href="/categories" className='text-white font-semibold' >Categories</Link>
            </div>
            <div className="hidden md:flex gap-4 items-center justify-center">
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

                ) : <Link className={buttonVariants({ variant: "secondary" })} href="/login">
                    Login
                </Link>
                }
            </div>
            <div className="md:hidden my-auto">
                <Sheet>
                    <SheetTrigger>
                        <Menu color='#fff' size={32} />
                    </SheetTrigger>
                    <SheetContent className='bg-[#1A1B23] border-none'>
                        <SheetHeader>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-4 items-center justify-center">
                                    {user ? (
                                        <>
                                            <div className="flex items-center gap-2">
                                                <div className="size-10 font-bold bg-[#eee] select-none flex items-center justify-center rounded-full ring-1">
                                                    {user.name.split("")[0]}
                                                </div>
                                                <p className='text-white'>{user.name}</p>
                                            </div>
                                            <LogoutBtn />
                                        </>

                                    ) :
                                        <SheetClose asChild>
                                            <Link className={buttonVariants({ variant: "secondary" })} href="/login">
                                                Login
                                            </Link>
                                        </SheetClose>
                                    }
                                </div>
                                <div className="flex flex-col items-center mt-10 gap-4">
                                    <SheetClose asChild>
                                        <Link href="/" className='text-white text-xl font-semibold' >Home</Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="/products" className='text-white text-xl font-semibold' >Products</Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="/categories" className='text-white text-xl font-semibold' >Categories</Link>
                                    </SheetClose>
                                </div>
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

        </div>
    )
}
