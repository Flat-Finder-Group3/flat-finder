import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Result } from 'antd';
import {useState} from 'react'

export default function SignIn({name, email, password, setName, setEmail, setPassword, handleLogin, handleRegister, emailSent}) {

  const [showRegister, setShowRegister] = useState(false)


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form fade-in"
      initialValues={{
        remember: true,
      }}
      onFinish={showRegister ? handleRegister : handleLogin}
    >
      {
        showRegister && emailSent ? 
        <Result
          className='fade-in'
          status="success"
          title="Email sent "
        /> 
      :
    <div>
      {showRegister &&
            <Form.Item
            name="Name"
            className="fade-in"
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />}
             placeholder="Name"
             value={name}
             onChange={(e) => setName(e.target.value)}
             />
          </Form.Item> 
    }
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" block>
          {
            showRegister ? 
            'Verify email' :
            'Log in'
            
          }
        </Button>
        
      </Form.Item>
      </div>}
        {
          showRegister ?  
          <div>
            Back to <a onClick={() => setShowRegister(false)} style={{color: 'orange'}}>sign in</a>
          </div>
            :
          <div>
            New consultant? <a onClick={() => setShowRegister(true)} style={{color: 'orange'}}>Register now</a>
          </div>
        }
    </Form>
  );
};