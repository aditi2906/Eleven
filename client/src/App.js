import "./App.css";
import { Button, Input } from "@nextui-org/react";
function App() {
  return (
    <main className="h-screen flex justify-center items-center bg-slate-100">
      <div className="flex flex-col gap-y-5 justify-center items-center text-xl">
        <Input
          className="shadow-sm text-xl"
          label="Enter Patient's Mobile Number"
          clearable={true}
          placeholder="813123XXXX"
          width="300px"
          type="number"
          up
        />
        <Button>Sign in</Button>
      </div>
    </main>
  );
}

export default App;
