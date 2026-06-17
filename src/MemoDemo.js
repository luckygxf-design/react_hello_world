import React from 'react'
import { useState } from 'react';

const MyComponent = React.memo((props) => {
    console.log('rendering mycomponent');
    return <div>{props.text}</div>;
});

const MyComponentV1 = (props) => {
    console.log('rendering mycomponent');
    return <div>{props.text}</div>;
};

const MemoDemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('hello world');

    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>IncrementCount</button>
            <MyComponentV1 text={text}/>
        </div>
    );
}

export default MemoDemo;