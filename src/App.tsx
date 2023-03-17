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

function App() {
    const [count, setCount] = useState(1);
    const [showHookUseEffect, setShowHookUseEffect] = useState(true);
    return (
        <>
            <ArticleTitle />
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
    );
}

export default App;
