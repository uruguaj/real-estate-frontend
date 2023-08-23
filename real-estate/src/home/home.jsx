import './home.css'
import React, {useState} from 'react';
const { Option } = Select;
import { Button, Input, Select, Space, FloatButton } from 'antd';
const { Search } = Input;




export default function Home (){

    const handleChange = ()=>{
    }

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

    return(
        <div className='home'>
            <div className='home-title-div'>
                <h1>Modern living for Everyone!</h1>
            </div>
            <div className='search'>
                <Select
                    mode="multiple"
                    placeholder="Select Type of Property"
                    onChange={handleChange}
                    className='select-type'
                >
                    <Option value="apartment" label="Apartment">
                        <Space>
                            Apartment
                        </Space>
                    </Option>

                    <Option value="villa" label="Villa">
                        <Space>
                            Villa
                        </Space>
                    </Option>

                </Select>


                <Select
                    mode="multiple"
                    placeholder="Bedrooms"
                    onChange={handleChange}
                    className='select-bedrooms'
                >
                    <Option value="1" label="1">
                        <Space>
                            1
                        </Space>
                    </Option>

                    <Option value="2" label="2">
                        <Space>
                            2
                        </Space>
                    </Option>


                </Select>

                <Select
                    mode="multiple"
                    placeholder="Location"
                    onChange={handleChange}
                    className='select-location'
                >
                    <Option value="Palm Jumeirah" label="Palm Jumeirah">
                        <Space>
                            Palm Jumeirah
                        </Space>
                    </Option>


                </Select>
                <div className='price'>
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

                <Button type='primary' className='search-button'>Search!</Button>
                </div>
            </div>
            <div className='home-content'>
                <img alt='property' src='./propety.jpeg'/>
                <div className='home-text'>
                    <h1 className='home-content-title'>We are dubai estate!</h1>
                    <span className='home-content-span'>
                        We provide a complete service for the sale , purchase or rental of real estate.
                        <div className='home-points'>
                            <h4 style={{marginTop:'0.5rem'}}>Luxury.</h4>
                            <h4>Affordable.</h4>
                            <h4> Fast.</h4>
                        </div>

                </span>
                </div>


            </div>
        </div>
    )
}