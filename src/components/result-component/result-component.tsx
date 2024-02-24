import React, { useState } from 'react';
import  './result-component.css';
import 'antd/dist/antd.css';
import { Button, Result } from 'antd';

import { resultData } from '@constants/result-data';
import Loader from '@components/loader/loader';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { isLoadingState } from '@redux/app-slice';


export const ResultComponent: React.FC = () => {
    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const isLoading = useAppSelector(isLoadingState);
    
    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });
   
    return (
        <>  
            {isLoading && <Loader/>}
            <Result
                status={resultData[2].status}
                title={resultData[2].title}
                subTitle={resultData[2].description}
                extra={
                    <Button type='primary' size='large' data-test-id={resultData[2].dataTestId}>
                        {resultData[2].buttonText}
                    </Button>
                }
                className='result-card'
            />
        </>
    );
};
