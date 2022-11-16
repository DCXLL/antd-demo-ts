import React, { useState } from 'react';
import './App.less';
import { ArticleTitle, HookUseState } from '@/components/index';
import { Button, } from 'antd';

function App() {
    const [isHookUseState, setIsHookUseState] = useState(true);
    return (
        <>
            <ArticleTitle />
            <div className="section-useState">
                <div>{isHookUseState && <HookUseState />}</div>
                <div className='marT10'>
                    <Button onClick={() => setIsHookUseState(!isHookUseState)}>
                        {isHookUseState ? 'hide' : 'show'} useState
                    </Button>
                </div>
            </div>
        </>
    );
}

export default App;
