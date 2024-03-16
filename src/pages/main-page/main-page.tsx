import { useId } from 'react';
import { Button, Card, Col, Row } from 'antd';
import { HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { CustomCardAction } from '@components/custom-card-action/custom-card-action';
import { CalendarIcon } from '@components/custom-icons/custom-icons';

import 'antd/dist/antd.css';
import './main-page.css';
import { Paths } from '@constants/api';
import { useNavigate } from 'react-router-dom';
import { CalendarDataTeatId } from '@constants/data-test-id';






export const MainPage: React.FC = () => {
    const navigate = useNavigate();

    const buttonActions = [
        {
            key: useId(),
            title: 'Расписать тренировки',
            icon: <HeartFilled />,
            label: 'Тренировки',
            pathTo: Paths.TRAINING,
        },
        {
            key: useId(),
            title: 'Назначить календарь',
            icon: <CalendarIcon />,
            label: 'Календарь',
            pathTo: Paths.CALENDAR,
            dataTestId: CalendarDataTeatId.MENU_BUTTON_CALENDAR
        },
        {
            key: useId(),
            title: 'Заполнить профиль',
            icon: <IdcardOutlined />,
            label: 'Профиль',
            pathTo: Paths.PROFILE
        },
    ];
   return (
       <>
           <Card className='main-card' bordered={false}>
               <p>С CleverFit ты сможешь:</p>
               <p> — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</p>
               <p>
                   — отслеживать свои достижения в разделе статистики, сравнивая свои результаты
                   с&nbsp;нормами и рекордами;{' '}
               </p>
               <p>
                   — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы
                   о&nbsp;тренировках;{' '}
               </p>
               <p>
                   — выполнять расписанные тренировки для разных частей тела, следуя подробным
                   инструкциям и советам профессиональных тренеров.
               </p>
           </Card>
           <Card className='main-card' bordered={false}>
               <p>
                   CleverFit — это не просто приложение, а твой личный помощник в&nbsp;мире фитнеса.
                   Не откладывай на завтра — начни тренироваться уже&nbsp;сегодня!
               </p>
           </Card>
           <Row gutter={[16, 8]} className='grid-container' style={{ marginTop: -8 }}>
               {buttonActions.map((item) => {
                   return (
                       <Col key={item.key} xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                           <CustomCardAction
                               title={item.title}
                               actions={[
                                   <Button type='text' data-test-id={item?.dataTestId} icon={item.icon} onClick={() => {navigate(item.pathTo)}} >
                                       {item.label}{' '}
                                   </Button>,
                               ]}
                           />
                       </Col>
                   );
               })}
           </Row>
       </>
   );
};
