import counterStore from "../store/counter";

const Counter = () => {
  const { count, increaseCount, decreaseCount } = counterStore((state) => ({
    count: state.count,
    increaseCount: state.increaseCount,
    decreaseCount: state.decreaseCount,
  }));
  return (
    <div>
      <h5>{count}개</h5>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
};

export default Counter;
