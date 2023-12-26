import "./styles.css";
import { Counter } from "./features/counter";

export default function App() {
  return (
    <div className="flex flex-col items-center container-md max-h-screen bg-black p-10">
      <h1 className="text-5xl mb-2 font-medium text-white">
        Counter Redux example
      </h1>
      <Counter />
    </div>
  );
}
