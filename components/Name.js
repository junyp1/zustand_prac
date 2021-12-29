import { useCallback, useState } from "react";
import nameStore from "../store/name";

const Name = () => {
  const [editName, setEditName] = useState("");
  const { name, setName } = nameStore((state) => ({
    name: state.name,
    setName: state.setName,
  }));

  const onChangeName = useCallback(
    (e) => {
      setEditName(e.target.value);
    },
    [editName]
  );

  const clickToSetName = () => {
    setName(editName);
  };

  return (
    <>
      <h1>{name}</h1>
      <div>
        <input
          type="text"
          placeholder="이름"
          value={editName}
          onChange={onChangeName}
        ></input>
        <button onClick={clickToSetName}>set</button>
      </div>
    </>
  );
};

export default Name;
