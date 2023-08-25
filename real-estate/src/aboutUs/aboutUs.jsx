import './aboutUs.css';
import { Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function AboutUs() {
  return (
    <div className="about-us" id="aboutUs">
      <Divider />
      <h2 className="about-us-title top-off-title">About Us</h2>
      <Divider />

      <div className="owner">
        <Avatar size={64} icon={<UserOutlined />} className="about-avatar" />
        <h3 className="owner-name">John Smith</h3>
        <p className="owner-detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo vestibulum massa et commodo. Aenean
          ac turpis neque. Quisque consequat diam risus, et gravida ex tempus nec. Donec ex enim, iaculis sit amet
          maximus et, commodo eu leo.
        </p>
      </div>
      <div className="owner">
        <Avatar style={{ backgroundColor: '#87d068' }} size={64} icon={<UserOutlined />} className="about-avatar" />
        <h3 className="owner-name">Margharet Johnson</h3>
        <p className="owner-detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo vestibulum massa et commodo. Aenean
          ac turpis neque. Quisque consequat diam risus, et gravida ex tempus nec. Donec ex enim, iaculis sit amet
          maximus et, commodo eu leo.
        </p>
      </div>
    </div>
  );
}
