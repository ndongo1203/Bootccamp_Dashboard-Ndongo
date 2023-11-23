import React from 'react'
import Menu from '../pages/Menu.jsx'
import ContentItem from './ContentItem.jsx'
import Card from './Card.jsx'


function Content() {
  return (
    <div className="">
      <ContentItem />
      <div className='p-4'>
        <Menu id={'menu1'} icon={` bi bi-x-circle-fill fs-3 d-flex bg-info text-danger align-items-center`} title={'Your application is rejected!'} description={'You submitted on your Letter of Authorization (LOA) is different from what is on file with your carrier in their Customer Service Record (CSR). A CSR is a copy of how your telephone records appear in the telephone .'} />
        <Menu id={'menu2'} icon={`bi bi-pencil-fill fs-3 d-flex bg-success text-black align-items-center`} title={'Edit Your Service'} description={'You may edit your service and then send it for the approval.'} />

        <Card />
    </div>
    </div>
  )
}

export default Content