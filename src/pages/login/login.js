import React, { Fragment } from 'react';
import history from 'utils/history';
import { saveLocalStorage } from 'utils/utils';
import { Input, Button, Form, Icon } from 'antd';
import styles from './style.scss';

class Login extends React.Component {
  handleLogin = () => {
    console.log(123, history);
    saveLocalStorage('user', 'login');
    history.push('/');
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Fragment>
        <Form className={styles.wrapCon} onSubmit={this.handleLogin}>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input
                placeholder="请输入用户名"
                prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input
                placeholder="请输入密码"
                prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
              />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" className={styles.btn}>
            登录
          </Button>
        </Form>
      </Fragment>
    );
  }
}

const LoginWithForm = Form.create()(Login);

export default LoginWithForm;
