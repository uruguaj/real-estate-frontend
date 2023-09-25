import { Avatar, Button, Col, Form, Input, Row } from 'antd';
import './navBar.css';
import TextArea from 'antd/es/input/TextArea.js';
import CountUp from 'react-countup';
import { Statistic } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const formatter = (value) => <CountUp end={value} separator="," />;

export default function DrawerComponent() {
  const [form] = Form.useForm();

  return (
    <div className="object">
      <h1 className="drawer-title">Any question?</h1>
      <Form form={form} className="form">
        <div>
          <Input placeholder="Name And Surname" className="contact-input" required />
          <Input placeholder="Email" className="contact-input" required />
          <Input placeholder="Phone" className="contact-input" required />
        </div>
        <TextArea
          showCount
          maxLength={1000}
          style={{
            height: 120,
            marginBottom: 24,
          }}
          placeholder="Message"
          required
        />
        <div className="submit">
          <Button type="primary" htmlType="submit">
            <span className="drawer-span-text">Submit</span>
          </Button>
        </div>
        <div className="profile-div">
          <Avatar style={{ backgroundColor: '#87d068' }} size={64} icon={<UserOutlined />} className="about-avatar" />
          <h3 className="profile">Margharet Johnson</h3>
          <div className="statistics">
            <span className="statistics-span">
              We sold <Statistic value={1128} formatter={formatter} /> properties
            </span>
            <span className="statistics-span">
              We have more than <Statistic value={1103} precision={2} formatter={formatter} /> satisfied customers
            </span>
          </div>
        </div>
      </Form>
    </div>
  );
}
