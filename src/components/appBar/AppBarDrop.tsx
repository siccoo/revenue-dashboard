import React, { useRef, useState } from 'react'
import { useCloseOnclickOutside } from '../../hooks/useOutsideClickClose'
import { dropItems } from './sidebarItems'
import Text from '../ui/text'
import colors from '../../helperFunctions/colors'
import { right } from '../../assets'

interface IProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
const AppBarDrop = ({ setShow }: IProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const ref = useRef(null)
    useCloseOnclickOutside({ ref, setShow })

    return (
        <div ref={ref} className='bg-[white] rounded-[20px] p-4 absolute top-[70px] right-[-150px] w-[380px] gap-[20px] flex flex-col drop-shadow-lg'>
            {
                dropItems.map((item, index) => (
                    <div
                        key={item.title}
                        className='flex gap-2 p-4 transition border-transparent cursor-pointer rounded-[10px] hover:border'
                        style={{ borderColor: colors.grey_100 }}
                        onMouseEnter={() => {setIsHovered(true); setHoveredIndex(index)}}
                        onMouseLeave={() => {setIsHovered(false); setHoveredIndex(null)}}
                    >
                        <div className='p-2 rounded-md border' style={{ borderColor: colors.grey_100 }}>
                            <img alt='img' src={item.img} />
                        </div>

                        <div className='flex justify-between items-center flex-1'>
                            <div>
                                <Text color={colors.black_300} fontSize='14px' lineHeight='18px' fontWeight={600}>{item.title}</Text>
                                <Text color={colors.grey_400} fontSize='12px' lineHeight='16px' fontWeight={400} >{item.subtitle}</Text>
                            </div>

                            {
                                isHovered && hoveredIndex === index && <img src={right} alt='img' className='h-5' />

                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AppBarDrop