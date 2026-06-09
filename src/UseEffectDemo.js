import React, { useState, useEffect } from 'react';

function UseEffectDemo() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      console.log('组件每次渲染后都会执行');
      document.title = `点击了 ${count} 次`;
    }); // 没有依赖数组
    
    return <button onClick={() => setCount(count + 1)}>点击 {count}</button>;
  };
export default UseEffectDemo;