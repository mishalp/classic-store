import { Skeleton } from "@/components/ui/skeleton";


export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="flex min-h-screen mb-8 mt-20 flex-col gap-4 p-4 lg:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-2  min-h-[80vh]">
                <div className="flex flex-col gap-4 items-center lg:sticky top-10 lg:h-fit">
                    <div className="relative">
                        <Skeleton className="aspect-square w-[15rem] sm:w-[25rem] object-contain bg-[#bbb]" />
                    </div>
                    <div className="flex gap-4 max-w-[calc(100vw-2rem)] disableScrollBar overflow-x-scroll">
                        <Skeleton className="aspect-square min-w-[4rem] object-contain bg-[#bbb]" />
                        <Skeleton className="aspect-square min-w-[4rem] object-contain bg-[#bbb]" />
                        <Skeleton className="aspect-square min-w-[4rem] object-contain bg-[#bbb]" />
                    </div>
                </div>
                {/* divider */}
                <div className="flex flex-col max-w-[50rem] w-full justify-self-center gap-4">
                    <div className="uppercase flex justify-between">
                        <Skeleton className="h-6 w-28 bg-[#bbb]" />
                        <Skeleton className="size-10 bg-[#bbb]" />
                    </div>
                    <div className="flex flex-col gap-6 lg:mr-16">
                        <div className="flex flex-col gap-4">
                            <Skeleton className="h-10 w-1/2 bg-[#bbb]" />
                            <Skeleton className="h-3 w-full bg-[#bbb]" />
                            <Skeleton className="h-3 w-11/12 bg-[#bbb]" />
                            <Skeleton className="h-3 w-5/6 bg-[#bbb]" />
                        </div>
                        <div className="flex gap-4 text-lg items-center">
                            <Skeleton className="h-8 w-20 bg-[#bbb]" />
                            <Skeleton className="h-8 w-20 bg-[#bbb]" />
                            <Skeleton className="h-8 w-20 bg-[#bbb]" />
                        </div>
                        <Skeleton className="h-8 w-20 bg-[#bbb]" />
                        <div className="flex gap-4">
                            {/* select */}
                            <Skeleton className="h-12 w-full rounded-md bg-[#bbb]" />
                            <Skeleton className="h-12 w-full rounded-md bg-[#bbb]" />
                        </div>
                        <div className="rounded-md flex gap-1 outline outline-2 outline-[#eee] w-fit">
                            <Skeleton className="rounded-[2px] size-10 bg-[#bbb]" />
                            <Skeleton className="rounded-[2px] size-10 bg-[#bbb]" />
                            <Skeleton className="rounded-[2px] size-10 bg-[#bbb]" />
                        </div>
                        <div className="flex w-full gap-4 my-4">
                            <Skeleton className="rounded-[2px] h-14 w-full bg-[#bbb]" />
                            <Skeleton className="rounded-[2px] h-14 w-full bg-[#bbb]" />
                        </div>
                        <div className="p-4 bg-[#EEF3FF] rounded px-6 space-y-2">
                            <Skeleton className="rounded-[2px] h-14 w-32 bg-[#bbb]" />
                        </div>
                        <Skeleton className="rounded-[2px] h-14 w-full bg-[#bbb]" />
                        <Skeleton className="rounded-[2px] h-14 w-full bg-[#bbb]" />
                        <Skeleton className="rounded-[2px] h-14 w-full bg-[#bbb]" />
                    </div>
                </div>
            </div>
        </div>
    )
}