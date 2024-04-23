import React from 'react'
import './Skeletons.css'
interface IProps {
  className: string
}
const SkeletonElement = ({ className }: IProps) => {
  const classes = `skeleton ${className}`
  return (
    <div className={classes}></div>
  )
}

export default SkeletonElement