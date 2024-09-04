import { Clock, Todo } from "../ClockSection";

export default function ClockSection() {
  return(
    <section className="w-1/2 flex flex-col items-center justify-center">
<Clock />
<Todo />
    </section>
  );
}
