import MainClock from "./MainClock";
import PomodoroClock from "./PomodoroClock";

export default function Clock() {
  return(
    <div className="flex flex-col h-2/3 w-full bg-red-300">
      <MainClock /><PomodoroClock />
      </div>
  );
}
