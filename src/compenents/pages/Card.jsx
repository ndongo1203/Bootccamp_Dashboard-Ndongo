import React from 'react';
import CardItem from './CardItem';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

function Card() {
  return (
    <div className="container mt-5">
      <div className="row">
        <CardItem
          header={'7/24 LIVE HELP'}
          text={'Enterprise Solutions'}
          image={image1}
          desciption={'Canned responses are used to answer the questions quickly, but not necessarily the lead to closing a sale. Faster response. Right tone of language. Consistency in brand experience '}
          footer={'READ MORE >'}
        />

        <CardItem
          header={'CLOUD DATABASE'}
          text={'Enterprise Solutions'}
          image={image2}
          desciption={'A cloud database is a basically a scalable content database running on a cloud computing platform that can be private, public, or hybrid. Consistency in brand experience '}
          footer={'READ MORE >'}
        />

        <CardItem
          header={'ENTERPRISE ACCOUNT'}
          text={'Pricing'}
          image={image3}
          desciption={'Enterprise solutions are designed to integrate multiple facets of a companys business through the interchange of information from various business process ...'}
          footer={'UPGRADE ENTERPRISE >'}
        />
      </div>
    </div>
  )
}

export default Card;
