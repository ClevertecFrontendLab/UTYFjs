import React from 'react';
import styles from'./auth.module.css';
import 'antd/dist/antd.css';
import { CleverFitIcon } from '@components/custom-icons/custom-icons';
import { Tabs } from 'antd';
import { Login } from '@components/login/login';
import { Link, useLocation } from 'react-router-dom';
import { Registration } from '@components/registration/registration';
import { Paths } from '@constants/api';



export const Auth: React.FC = () => {
 const { pathname } = useLocation();
    const items = [
        { label: <Link to={Paths.LOGIN}>Вход</Link>, key: 'login', children: <Login /> }, 
        {
            label: <Link to={Paths.REGISTRATION}>Регистрация</Link>,
            key: 'registration',
            children: <Registration />,
        },
    ];


    return (
        <>
            <div className={styles.logo}>
                <CleverFitIcon />
            </div>
            <Tabs
                className={styles['auth_tabs']}
                defaultActiveKey={pathname === Paths.LOGIN ? 'login' : 'registration'}
                centered
                tabBarGutter={0}
                tabBarStyle={{
                    width: '100%',
                    margin: '0 auto',
                }}
                style={{
                    marginBottom: pathname === Paths.LOGIN ? 110 : 0,
                }}
                size='large'
                items={items}
            />
        </>
    );};