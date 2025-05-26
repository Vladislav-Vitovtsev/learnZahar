import React, {useEffect, useState} from 'react';

// Цель: каждую секунду обновлять значение таймера

export default function Timer() {
    let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];




    const [seconds, setSeconds] = useState(0);
    const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //   //..
    // }, []) // пустой [] работает при монтировании компонента
    // useEffect(() => {
    //   //..
    // }, [seconds]) // работает при изменении переменой seconds (может быть несколько переменных)
    // useEffect(() => {
    //   //..
    //   // return () => {}... - сделать чтото при размонтировании
    // }, [seconds]) // работает при изменении переменой seconds (может быть несколько переменных)

    // useEffect(() => {
    //     //таймер
    //     // создать интервал выполнениня функции, 1000 === 1секунда - через какое время будет повторный вызов (в милисекундах)
    //     const timer = setInterval(() => {
    //             setSeconds((prevValue) => prevValue + 1)
    //         }, 1000)
    //     //                                 (аргументы, значения) => {
    //     //                                    тело функции
    //     //                                 } - функция, короткая запись
    //     return () => clearInterval(timer) // при размонтировании удалить таймер
    // }, []); // [] — только один раз при монтировании

    useEffect(() => {
        const timer = setInterval(() => {

            setSeconds((prevSeconds) => {
                return prevSeconds + 1;

            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect((() => {
        console.log(colors[counter])
    }), [counter])

    const handleCalculate = (znak) => {
        if (znak ==='plus' && counter < 5){
            setCounter(counter + 1)
        }else if (znak ==='minus' && counter > 0) {
            setCounter(counter - 1)
        }
    }
    return (
        <div>

            <h2>Минут прошло: {Math.ceil(seconds / 60)} Секунд прошло: {seconds % 60}</h2>

            <h1>{counter}</h1>
            <button onClick={()  => handleCalculate('plus')}> Нажми на меня</button>
            <button onClick={() => handleCalculate('minus')}> Не нажимай</button>

        </div>
    );
}
