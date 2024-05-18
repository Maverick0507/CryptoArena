import React from 'react';
import { Row, Typography } from 'antd';

import BgImage from '../images/coming-soon.png';

// Exchanges (Comming Soon)
const Exchanges = () => (
  <Row gutter={[32, 32]} className="exchanges-card-container">
    <img src={BgImage} alt="Coming Soon" className="exchanges-image" loading="lazy" />
    <Typography.Title level={1} className="exchanges-heading">
      Coming Soon
    </Typography.Title>
  </Row>
 );

export default Exchanges;
