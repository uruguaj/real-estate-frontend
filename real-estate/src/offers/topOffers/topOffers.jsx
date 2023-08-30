import NavBar from '../../navBar/navBar.jsx';
import {Button, Carousel, Divider, Image, Tag} from 'antd';
import axios from 'axios';
import './topOffers.css';
import { useEffect, useState } from 'react';

export default function TopOffers() {
  const contentStyle = {
    margin: 0,
    height: '25.5rem',
    color: '#fff',
    textAlign: 'center',
  };

  const [topOffers, setTopOffers] = useState([]);
  useEffect(() => {
    axios.get(`./offers/offers.json`).then((res) => {
      const filteredOffers = res.data.filter((offer) => offer.tag === 'top');
      setTopOffers(filteredOffers);
    });
  }, [topOffers]);

  return (
    <div className="top-offer-main-div">
      <div className="top-off-main">
        <Divider id="topOffers" />
        <h2 className="top-off-title">Top Offers</h2>
        <Divider />
      </div>
      <div className="top-off on-mobile">
        <Carousel autoplay>
          {topOffers.map((offer) => (
            <div key={offer} className="box-back">
              <div className="box-front-holder">
                <div style={contentStyle} className="box-front">
                  <div className="top-offer">
                    <div className="offer-box">
                      <div className="image">
                        <Image preview={false} key={offer.id} src={offer.image} alt="img" className="image-offer" />
                      </div>
                      <div> {offer.title}</div>
                      <div>{offer.details}</div>
                      <div>Number Of Rooms : {offer.rooms}</div>
                      <div>Price : {offer.price} EUR</div>
                      <div>{offer.location}</div>
                      <Tag style={{marginTop:"0.5rem"}} color="green">
                        Top Offer!
                      </Tag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className='on-large'>

        {topOffers.map((offer) => (
            <div key={offer} className='box'>
                <div className="image">
                    <Image preview={false} key={offer.id} src={offer.image} alt="img" className="image-offer" />
                </div>
                <div className='offer-info'>
                <div className='offer-title'>{offer.title}</div>
                <div className='offer-details'>{offer.details}</div>
                <div className='offer-other'>Number Of Rooms : {offer.rooms}</div>
                <div className='offer-other' >Price : {offer.price} EUR</div>
                <div  className='offer-other'>{offer.location}</div>
                <Tag className='tag' color="green">
                    Top Offer!
                </Tag>
                </div>
            </div>
        ))}

      </div>
    </div>
  );
}
