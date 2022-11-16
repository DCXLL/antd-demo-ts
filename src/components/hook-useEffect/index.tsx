import React, { useState, useEffect } from 'react';
import { Button, Space } from 'antd';
const HookUseState = () => {
    const [loginUser, setLoginUser] = useState({});
    const handle = () => {
        setLoginUser({});
    };
    
    useEffect (() => {

    })
    return (
        <>
            <h3>1. usestate</h3>
            <Space>
                <Button
                    type="primary"
                    onClick={() => {
                        handle();
                    }}
                >
                    获取当前登录信息
                </Button>
              
            </Space>
        </>
    );
};
export default HookUseState;
