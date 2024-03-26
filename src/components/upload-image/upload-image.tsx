import { Button, Upload } from 'antd';
import './upload-image.css';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Endpoint, StatusCode, baseUrl } from '@constants/api';
import { useState } from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { getAccessToken } from '@redux/user-slice';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload';
import ModalError from '@components/modal-error/modal-error';

import TooLargeFileCard from '@components/modal-error/too-large-file-card/too-large-file-card';

type UploadImagePropsType = {
    imgSrc: string;
};

const UploadImage = ({ imgSrc }: UploadImagePropsType) => {
    const [isModalError, setIsModalError] = useState(false);
    const accessToken = useAppSelector(getAccessToken);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    //todo добавить тип для стейта

    const defaultFiles = imgSrc
        ? [
              {
                  uid: 'uuidstring',
                  name: 'avatar',
                  status: 'done',
                  url: imgSrc,
              },
          ]
        : [];
    const [fileList, setFileList] = useState<UploadFile[]>(defaultFiles as UploadFile[]);

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });

    const handleOnChange = (e: UploadChangeParam<UploadFile>) => {
        if (e.fileList[0]?.status === 'error') {
            setFileList([
                {
                    uid: 'error',
                    name: e.fileList[0].name,
                    status: 'error',
                },
            ]);
        } else {
            setFileList(e.fileList);
        }

        if (e.fileList[0]?.response?.statusCode === StatusCode.CONFLICT) {
            setIsModalError(true);
        }
    };
    const handleOnRemove = () => {
        setFileList([]);
    };
    const handleCloseModalError = () => {
        setIsModalError(false);
    };

    return (
        <>
            <Upload
                action={`${baseUrl}/${Endpoint.UPLOAD_IMAGE}`}
                headers={{ authorization: `Bearer ${accessToken}` }}
                withCredentials
                accept='image/*'
                fileList={fileList}
                listType={isMobile ? 'picture' : 'picture-card'}
                progress={{ strokeWidth: 4, showInfo: false, size: 'default' }}
                onChange={handleOnChange}
                onRemove={handleOnRemove}
            >
                {fileList.length > 0 ? null : (
                    <>
                        {!isMobile && (
                            <div>
                                <PlusOutlined />
                                <div className='profile__upload-text' style={{ marginTop: 8 }}>
                                    Загрузить фото профиля
                                </div>
                            </div>
                        )}
                        {isMobile && (
                            <div className='profile__upload_mobile'>
                                <p className='upload__label'>Загрузить фото профиля:</p>{' '}
                                <Button
                                    className='upload__button_mobile'
                                    icon={
                                        <UploadOutlined
                                            style={{ color: 'var(--character-light-border)' }}
                                        />
                                    }
                                    size='large'
                                >
                                    Загрузить
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </Upload>
            <ModalError isOpen={isModalError} width={416} isClosable={false}>
                <TooLargeFileCard handlePrimeButton={handleCloseModalError} />
            </ModalError>
        </>
    );
};

export default UploadImage;
