import React from 'react';
import './index.css';
import { Spin } from 'antd';

const Loader: React.FC = () => (
    <div className='loader-container'>
        <Spin tip="Loading" size="large">
            <div className="content" />
        </Spin>
    </div>
);

export default Loader;