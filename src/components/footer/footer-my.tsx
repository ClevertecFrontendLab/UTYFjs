import styles from './footer-my.module.css';

import 'antd/dist/antd.css';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Paths } from '@constants/api';
import { Card, Layout, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Footer } = Layout;
const { Meta } = Card;

export const FooterMy: React.FC = () => (
    <Footer className={styles.footer}>
        <Button type='text' className={styles['button_review']}>
            <Link to={Paths.FEEDBACKS} data-test-id='see-reviews'>
                Смотреть отзывы
            </Link>
        </Button>
        <Card
            className={styles['footer__card']}
            actions={[
                <Button
                    key='androidOS'
                    type='text'
                    icon={<AndroidFilled />}
                    className={styles['button_android']}
                >
                    Android OS
                </Button>,
                <Button
                    key='appleIOS'
                    type='text'
                    icon={<AppleFilled />}
                    className={styles['button_apple']}
                >
                    Apple iOS
                </Button>,
            ]}
        >
            <Meta
                title='Скачать на телефон'
                description='Доступно в PRO-тарифе'
                className={styles['card-body']}
            />
        </Card>
    </Footer>
);
