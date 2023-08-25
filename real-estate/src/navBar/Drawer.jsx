import { Button, Form, Input } from 'antd';
import './navBar.css';
import TextArea from 'antd/es/input/TextArea.js';

export default function DrawerComponent() {
  const [form] = Form.useForm();

  return (
    <div>
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
      </Form>
    </div>
  );
}
