import './App.less';
import {
    ArticleTitle,
    HookUseState,
    HookUseEffect,
    ReactDnD,
    // AntdTable,
} from '@/components/index';
import { useState } from 'react';
import { Button, Space } from 'antd';
import { UserBaseInfo } from './context/userInfo';
function App() {
    const [count, setCount] = useState(1);
    const [showHookUseEffect, setShowHookUseEffect] = useState(true);
    const [userInfo, setUserInfo] = useState({'username':'游客'});

    return (
        <UserBaseInfo.Provider value={userInfo}>
        <>
            <ArticleTitle />
            {/* <Button onClick={() => setUserInfo({'username':'王德磊'})}>切换用户</Button>   */}
            <HookUseState />
            {showHookUseEffect && <HookUseEffect />}
            <Space>
                <Button
                    onClick={() => {
                        setShowHookUseEffect(true);
                    }}
                >
                    加载HookUseEffect
                </Button>
                <Button
                    onClick={() => {
                        setShowHookUseEffect(false);
                    }}
                >
                    卸载HookUseEffect
                </Button>
                <Button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    HookUseEffect渲染次数{count}
                </Button>
            </Space>
            <ReactDnD />
            {/* <AntdTable /> */}
            </>
        </UserBaseInfo.Provider>
    );
}

export default App;
