import "./App.css";
import { Button, Input } from "@nextui-org/react";
function App() {
  const [phone, setPhone] = useState(0)
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    console.log(phone,password);
    // e.preventDefault()÷÷
    // Send a POST request to your Node.js backend with the form data
    fetch('http://localhost:4000/create ', {
      method: 'POST',
      body: JSON.stringify({ phone_no : phone, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

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
