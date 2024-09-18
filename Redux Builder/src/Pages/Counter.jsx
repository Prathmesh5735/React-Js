import React from "react";
import CounterValue from "./CounterValue";
import CounterButton from "./CounterButton";
import Theme from "./Theme";
import { useSelector } from "react-redux";

const Counter = () => {
  const { theme } = useSelector((store) => store.ThemeReducer);
  return (
    <>
      <Theme />
      <div
        className="counter"
        style={{
          border: `2px solid ${theme === 'light' ? '#ccc' : '#444'}`,
          borderRadius: '8px',
          width: '25%',
          margin: '20px auto',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
          color: theme === 'light' ? '#333' : '#f9f9f9',
          boxShadow: theme === 'light' ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        <CounterValue />
        <CounterButton />
      </div>
    </>
  );
};


export default Counter;
