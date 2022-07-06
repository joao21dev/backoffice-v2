/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  className: string
  color: string
  svgIcon: string
  iconColor: string
  title: string
  description: string
  data: string
  arrowIcon: string
  bgColor: string
  currency: string
}

const StatisticsWidget5: React.FC<Props> = ({
  className,
  color,
  svgIcon,
  iconColor,
  title,
  description,
  data,
  arrowIcon,
  bgColor,
  currency,
}) => {
  return (
    <a href='#' className={`card bg-${color} hoverable ${className}`}>
      {/* begin::Body */}
      <div className='card-body card-box-shadow w-160px h-193px'>
        <KTSVG path={svgIcon} className={`svg-icon-${iconColor} svg-icon-3x ms-n1`} />

        <div className='d-flex align-items-center'>
          <span className='fw-lighter text-black fs-5 py-1'>{currency}</span>
          <span className={`text-black fw-bold fs-2qx`}>{title}</span>
        </div>

        <div className={`fw-bold text-inverse-${color} h-55px fs-7`}>{description}</div>
        {/* begin::Item */}
        <div className={`d-flex align-items-center  bg-${bgColor} rounded mt-2`}>
          {/* begin::Icon */}
          <span className='svg-icon me-5'>
            <KTSVG
              path={`/media/icons/duotune/arrows/arr${arrowIcon}.svg`}
              className={`svg-icon-${iconColor} svg-icon-1`}
            />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          {/* <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bolder text-gray-800 text-hover-primary fs-6'>
              Group lunch celebration
            </a>
            <span className='text-muted fw-bold d-block'>Due in 2 Days</span>
          </div> */}
          {/* end::Title */}
          {/* begin::Lable */}

          <span className='fw-bolder text-white py-1'>{data}%</span>
          {/* end::Lable */}
        </div>
      </div>
      {/* end::Body */}
    </a>
  )
}

export {StatisticsWidget5}
