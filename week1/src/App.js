import React, { useEffect, useState } from 'react';

// Цель: каждую секунду обновлять значение таймера

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  // const [counter, setCounter] = useState(0);


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

  useEffect(() => {
    //тайме
    // создать интервал выполнениня функции, 1000 === 1секунда - через какое время будет повторный вызов (в милисекундах)
    const timer = setInterval(
      () => {
      setSeconds((prevValue) => prevValue + 1)
    }, 1000)
  //                                 (аргументы, значения) => {
  //                                    тело функции
  //                                 } - функция, короткая запись
    return () => clearInterval(timer) // при размонтировании удалить таймер
  }, []); // [] — только один раз при монтировании

  return (
    <div>
      {/*<h2>Секунд прошло: {seconds}</h2>*/}
      {/*<button onClick={() => {*/}
      {/*  setSeconds(seconds + 1)*/}
      {/*}}>*/}
      {/*  клик*/}
      {/*</button>*/}
      {/*<h2>Счетчик {counter}</h2>*/}
      {/*<button onClick={() => {*/}
      {/*  setCounter(counter + 4)*/}
      {/*}}>*/}
      {/*  клик2*/}
      {/*</button>*/}

      <h2>Секунд прошло: {seconds}</h2>
    </div>
  );
}
