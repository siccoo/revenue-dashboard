import React, { useRef, useState } from 'react';
import colors from '../../../utils/colors';
import Text from '../text';
import { checked, unchecked } from './assets';
import { useCloseOnclickOutside } from '../../../hooks/useOutsideClickClose';
import { TFilter, TFilterProps } from '../../../types';

interface DropdownProps {
    options: string[];
    className?: string
    filteredObj?: TFilter
    setFilterObj: React.Dispatch<React.SetStateAction<TFilter>>
    attr: 'status' | 'type'
}

const Dropdown: React.FC<DropdownProps> = ({ options, filteredObj, className, attr,setFilterObj }) => {
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef(null)

    useCloseOnclickOutside({ ref, setShow: setShowMenu })
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const handleSelection = (option: string) => {
        if (!filteredObj?.[attr]?.includes(option)) {
            setFilterObj((prev) => {
                const newValue = prev[attr] ? [...prev[attr], option] : [option]
                return {...prev, [attr]: newValue}
            });
        } else {
            setFilterObj((prev) => {
                const newValue = prev?.[attr]?.filter((val) => val !== option)
                return {...prev, [attr]: newValue}
            })
        }
    };

    const getVal = (array: string[]) => {
        return array?.map((option, index) => (
            <Text key = {option} color={colors.black_300} fontSize='14px' fontWeight={500} lineHeight='16px'>
                {index < array.length - 1 ? option + ',' : option}
            </Text>
        ))
    }
    const valueToDisplay = () => {
        if (filteredObj?.[attr]?.length) {
            return <div className='flex gap-1 w-[90%] truncate'>{getVal(filteredObj?.[attr])}</div>
        }
        return <Text color={colors.black_300} fontSize='14px' fontWeight={500} lineHeight='16px'>
            {`Choose`}</Text>
    }


    return (
        <div className={`relative inline-block text-left ${className}`}>
            <div className='w-full'>
                <div
                    onClick={handleClick}
                    style={{ borderColor: colors.grey_50, backgroundColor: colors.grey_50 }}
                    className="inline-flex justify-between items-center w-full cursor-pointer rounded-md border shadow-sm px-4 py-3 focus:outline-[black]"
                >
                    {valueToDisplay()}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#CBD5E1"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            {
                showMenu &&
                <div ref={ref} className="origin-top-right absolute right-0 mt-2 w-full z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {options.map((option) => (
                            <div
                                key={option}
                                onClick={() => handleSelection(option)}
                                className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                role="menuitem"
                            >
                                {
                                    filteredObj?.[attr]?.includes(option) ?
                                        <img src={checked} alt='img' /> :
                                        <img src={unchecked} alt='img' />
                                }
                                <Text color={colors.black_300} fontSize='16px' fontWeight={600} lineHeight='24px'>{option}</Text>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
};

export default Dropdown;
