/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  MixedWidget2,
  MixedWidget10,
  MixedWidget11,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  StatisticsWidget5,
  ChartsWidget1,
  MixedWidget7,
  MixedWidget6,
} from '../../../_metronic/partials/widgets'
import { ChartsWidget9 } from '../../../_metronic/partials/widgets/charts/ChartsWidget9'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    {/* <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <MixedWidget2
          className='card-xl-stretch mb-xl-8'
          chartColor='danger'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </div>
      <div className='col-xxl-4'>
        <ListsWidget5 className='card-xxl-stretch' />
      </div>
      <div className='col-xxl-4'>
        <MixedWidget10
          className='card-xxl-stretch-25 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='150px'
        />
        <MixedWidget11
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='175px'
        />
      </div>
    </div> */}
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-2  '>
        <StatisticsWidget5
          className='card-xl-stretch mb-xl-8'
          svgIcon='/media/icons/duotune/graphs/gra002.svg'
          color='white'
          iconColor='dark'
          title='4K'
          description='SALDO DE TRANSAÇÕES PERÍODO ATUAL'
          data='520'
          currency='R$'
          arrowIcon='066'
          bgColor='green'
        />
      </div>

      <div className='col-xl-2 '>
        <StatisticsWidget5
          className='card-xl-stretch mb-xl-8'
          svgIcon='/media/icons/duotune/ecommerce/ecm009.svg'
          color='white'
          iconColor='dark'
          title='15'
          description='CONTAS ATIVAS PERÍODO ATUAL'
          data='15'
          currency=''
          arrowIcon='065'
          bgColor='danger'
        />
      </div>

      <div className='col-xl-2  '>
        <StatisticsWidget5
          className='card-xl-stretch mb-xl-8'
          svgIcon='/media/icons/duotune/abstract/abs027.svg'
          color='white'
          iconColor='dark'
          title='350'
          description='TOTAL DE CONTAS ATIVAS'
          data='20'
          currency=''
          arrowIcon='065'
          bgColor='danger'
        />
      </div>

      <div className='col-xl-2 '>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='/media/icons/duotune/ecommerce/ecm005.svg'
          color='white'
          iconColor='dark'
          title='27,5K'
          description={`COMPRAS POR MÊS`}
          data='80'
          currency='R$'
          arrowIcon='066'
          bgColor='green'
        />
      </div>
      <div className='col-xl-2 '>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='/media/icons/duotune/ecommerce/ecm003.svg'
          color='white'
          iconColor='dark'
          title='2K'
          description='TARIFAS POR MÊS'
          data='5,2'
          currency='R$'
          arrowIcon='066'
          bgColor='green'
        />
      </div>
      <div className='col-xl-2 '>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='/media/icons/duotune/abstract/abs008.svg'
          color='white'
          iconColor='dark'
          title='4'
          description='AGÊNCIAS'
          data='8'
          currency=''
          arrowIcon='066'
          bgColor='green'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-4'>
        {/* <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' /> */}
        <ChartsWidget9 className=' mb-xl-8' />
      </div>
    
      <div className='col-xl-8 '>
        <ChartsWidget1 className=' mb-xl-8' />
        
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      {/* <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} /> */}
      {/* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */}
      {/* </div> */}
    </div>
    {/* end::Row */}

    {/* <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='150px'
        />
      </div>
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div> */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
