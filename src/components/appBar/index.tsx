import React from 'react'
import { invocing, link, media, store } from './assets'
import { Tooltip } from 'react-tooltip'
import './Appbar.css'

const AppBar = () => {
    const items = [
        { img: link, text: 'Link-in-Bio' },
        { img: store, text: 'Store' },
        { img: media, text: 'Media-Kit' },
        { img: invocing, text: 'Invoicing' }
    ]
    return (
        <>
            <div className='flex flex-col gap-[20px] rounded-[30px] p-4 shadow-lg'>
                {
                    items.map((item) => (
                        <div key={item.text}>
                            <img src={item.img} alt={`${item.text}`} className={`${item.text} icon cursor-pointer`} />
                            <Tooltip anchorSelect={`.${item.text}`} place='right'>{item.text.replaceAll('-', ' ')}</Tooltip>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default AppBar