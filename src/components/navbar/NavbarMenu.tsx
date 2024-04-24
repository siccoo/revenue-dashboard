import { useState } from 'react'
import { navMenu } from './utils'
import Button from '../ui/button'
import AppBarDrop from '../appBar/AppBarDrop'

const NavbarMenu = () => {
    const [active, setActive] = useState('Revenue')
    const [show, setShow] = useState(false)
    return (
        <div className='flex gap-1 lg:gap-3 items-center relative'>
            {
                navMenu.map((nav) => (
                    <Button
                        key={nav['name']}
                        theme={active === nav['name'] ? 'primary' : 'tertiary'}
                        className={`rounded-[30px] font-Degular font-[600] text-[14px] ${active !== nav['name'] && 'hover:!bg-[#EFF1F6]'}`}
                        icon={nav['image']}
                        onClick={() => {
                            if (nav['name'] === 'Apps') {
                                setShow(!show)
                            }
                            else {
                                setActive(nav['name'])
                                setShow(false)
                            }
                        }}
                        size='sm'
                    >{nav['name']}</Button>
                ))
            }
            {show && <AppBarDrop setShow={setShow} />}
        </div>
    )
}

export default NavbarMenu