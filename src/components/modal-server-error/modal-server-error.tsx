import { Button, Modal, Result } from 'antd';

import styles from './modal-server-error.module.css';
type ModalErrorProps = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
   };

const ModalServerError = ({ isOpen, setIsOpen }: ModalErrorProps) => {
   
    return (
        <Modal
            closable={false}
            centered
            visible={isOpen}
            footer={null}
            onOk={() => setIsOpen(false)}
            onCancel={() => setIsOpen(false)}
            bodyStyle={{ padding: '10px 24px' }}
            mask={true}
            maskClosable={true}
            maskStyle={{ backdropFilter: 'blur(12px)', background: 'rgba(121, 156, 212, 0.1)' }}
            width={539}
            className={styles['modal-server-error']}
        >
            <Result
                status={500}
                title={'Что-то пошло не так'}
                subTitle={'Произошла ошибка, попробуйте ещё раз.'}
                extra={
                    <Button
                        className={styles['btn_fit-content']}
                        type='primary'
                        size='large'
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        Назад
                    </Button>
                }
                className=''
            />
        </Modal>
    );
};

export default ModalServerError;