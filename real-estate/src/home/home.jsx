import './home.css';
import React, { useState } from 'react';
const { Option } = Select;
import { Button, Input, Select, Space, FloatButton } from 'antd';
const { Search } = Input;

export default function Home() {
  const handleChange = () => {};

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="home">
      <div className="home-title-div">
        <h1>Modern living for Everyone!</h1>
      </div>
      <div className="search">
        <Select
          mode="multiple"
          placeholder="Select Type of Property"
          onChange={handleChange}
          className="select-type"
          options={[
            {
              value: 'apartment',
              label: 'Apartment',
            },
            {
              value: 'villa',
              label: 'Villa',
            },
          ]}
        />
        <Select
          mode="multiple"
          placeholder="Bedrooms"
          onChange={handleChange}
          className="select-bedrooms"
          options={[
            {
              value: '1',
              label: '1',
            },
            {
              value: '2',
              label: '2',
            },
            {
              value: '3',
              label: '3',
            },
          ]}
        />

        <Select
          mode="multiple"
          placeholder="Location"
          onChange={handleChange}
          className="select-location"
          options={[
            {
              value: 'palm_jumeirah',
              label: 'Palm Jumeirah',
            },
            {
              value: 'downtown',
              label: 'Downtown',
            },
          ]}
        />

        <div className="price">
          <Space>
            <Space.Compact className="select-price">
              <Input
                placeholder="Min Price"
                suffix="EUR"
                value={minPrice}
                onChange={handleMinPriceChange}
                maxLength={9}
              />
              <Input
                placeholder="Max Price"
                suffix="EUR"
                value={maxPrice}
                maxLength={9}
                onChange={handleMaxPriceChange}
              />
            </Space.Compact>
          </Space>

          <Button type="primary" className="search-button">
            Search!
          </Button>
        </div>
      </div>
      <div className="home-content">
        <img alt="property" src="./propety.jpeg" />
        <div className="home-text">
          <h2 className="home-content-title">We are dubai estate!</h2>
          <span className="home-content-span">
            We provide a complete service for the sale , purchase or rental of real estate.
            <div className="home-points">
              <h4 className="mt-2">Luxury.</h4>
              <h4>Affordable.</h4>
              <h4> Fast.</h4>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
