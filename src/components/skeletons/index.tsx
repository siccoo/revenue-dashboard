import React from 'react'
import SkeletonElement from './SkeletonElement'
import Navbar from '../navbar'
import Shimmers from './Shimmers'

const Skeleton = () => {
    return (
        <div className='w-full h-full p-[6%] flex flex-col gap-[90px]'>
            <div className='w-full h-full flex justify-between'>
                <div className='w-[65%] h-full relative overflow-hidden'>
                    <div className='w-full h-full flex flex-col gap-[120px]'>
                        <SkeletonElement className='w-[50%] h-[50px]' />
                        <SkeletonElement className='w-[90%] h-[120px]' />
                    </div>
                    <Shimmers />
                </div>
                <div className='flex flex-col justify-between w-[30%] h-[300px] relative overflow-hidden'>
                    {/* <div className='flex flex-col w-full h-full justify-between'> */}
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className='flex flex-col gap-[8px] w-full'>
                            <SkeletonElement className='w-full h-3' />
                            <SkeletonElement className='w-full h-[30px]' />
                        </div>
                    ))}
                    {/* </div> */}
                    <Shimmers />
                </div>
            </div>

            <div className='w-full flex items-center justify-between relative overflow-hidden'>
                <div className='flex h-full w-[32%] flex-col gap-2'>
                    <SkeletonElement className='h-[60px]' />
                    <SkeletonElement className='h-[30px]' />
                </div>
                <Shimmers />

                <div className='flex gap-4'>
                    <SkeletonElement className='h-[40px] lg:h-[60px] w-[60%] lg:w-[160px] !rounded-[30px]' />
                    <SkeletonElement className='h-[40px] lg:h-[60px] w-[60%] lg:w-[160px] !rounded-[30px]' />
                </div>

                <Shimmers />
            </div>

            <div className='w-full flex flex-col gap-[40px] items-center justify-between relative overflow-hidden'>
                {[1, 2, 3, 4].map((i) => (
                    <div key = {i} className='w-full flex justify-between'>
                        <div className='flex w-full gap-2'>
                            <SkeletonElement className='!rounded-[50%] h-[60px] w-[70px]' />
                            <div className='w-full flex flex-col gap-2'>
                                <SkeletonElement className='rounded-[50%] h-[30px] w-[60%]' />
                                <SkeletonElement className='rounded-[50%] h-[20px] w-[40%]' />
                            </div>
                        </div>
                        <div className='flex items-end flex-col gap-2'>
                            <SkeletonElement className='h-[30px] w-[150px]' />
                            <SkeletonElement className='h-[20px] w-[200px]' />
                        </div>
                    </div>
                ))}

                <Shimmers />
            </div>
        </div>
    )
}

export default Skeleton