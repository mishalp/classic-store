"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { logOut } from './actions'
import { Loader2 } from 'lucide-react'

export default function LogoutBtn() {

    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const onclick = async () => {
        setLoading(true)
        await logOut()
        router.refresh()
    }

    return (
        <Button disabled={loading} variant="secondary" onClick={onclick}>
            {loading ? <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Log out
            </> : "Logout"}
        </Button>
    )
}
