import './home.css';
import React, { useState } from 'react';
import { Button, Input, Select, Space } from 'antd';
import ReactTypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';

export default function Home() {
  const handleChange = () => {};

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]*$/.test(value)) {
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
        <h1 className="text-xl">
          <ReactTypingEffect text={['Modern living for Everyone!']} />
        </h1>
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
            {
              value: 'house',
              label: 'House',
            },
            {
              value: 'penthouse',
              label: 'Penthouse',
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
            {
              value: '4',
              label: '4',
            },
            {
              value: '5',
              label: '5',
            },
            {
              value: '6',
              label: '6',
            },
            {
              value: '7',
              label: '7',
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
            {
              value: 'marina',
              label: 'Marina',
            },
            {
              value: 'jbr',
              label: 'JBR',
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
          <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }} className="haha">
            <Button type="primary" className="search-button">
              Search!
            </Button>
          </motion.button>
        </div>
      </div>

      <div className="home-content">
        <img alt="property" src="./propety.jpeg" loading="lazy" />
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
