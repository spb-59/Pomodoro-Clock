import MainClock from "./MainClock";
import PomodoroClock from "./PomodoroClock";

export default function Clock() {
  return (
    <div className="flex flex-col h-full w-full">
      <MainClock />
      <PomodoroClock />
    </div>
  );
}
