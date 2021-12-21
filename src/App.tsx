import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

const App = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);

  const onMinuteChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Minute"
        value={minutes}
        onChange={onMinuteChange}
      />
      <input type="number" placeholder="Hours" value={hours} />
    </div>
  );
};

export default App;
