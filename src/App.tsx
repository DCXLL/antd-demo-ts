import './App.less';
import { ArticleTitle, HookUseState, HookUseEffect } from '@/components/index';
import { useState } from 'react';
import { Button } from 'antd';

function App() {
    const [count, setCount] = useState(1);
    return (
        <>
            <ArticleTitle />
            <HookUseState />
            <HookUseEffect />
            <Button onClick={() => {setCount(count + 1)}}>父组件渲染次数{count}</Button>
        </>
    );
}

export default App;
