import React, {useState} from 'react';

function Counter() {
    // useState는 배열을 반환
    // 첫 번째 원소는 현재 상태, 두 번째 원소는 Setter 함수
    // Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const onDecrease = () => {
        setNumber(previousNumber => previousNumber - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;