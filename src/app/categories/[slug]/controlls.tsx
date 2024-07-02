"use client"

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Controls({ skip, page, maxPages, slug }: { skip: number; page: number | undefined; maxPages: number; slug: string }) {
    const router = useRouter()

    const goNext = () => {
        router.push(`/categories/${slug}?page=${page ? Number(page) + 1 : 1}`)
    }

    const goPrev = () => {
        router.push(`/categories/${slug}?page=${page ? Number(page) - 1 : 1}`)
    }

    return (
        <div className="flex gap-4">
            <Button onClick={goPrev} disabled={skip == 0}><ChevronLeft /> Prev</Button>
            <Button
                onClick={goNext}
                disabled={page? page + 1 == maxPages: 1 == maxPages}
            >
                Next <ChevronRight />
            </Button>
        </div>
    )
}
