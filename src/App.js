import { useState } from "react";
import Input from "./component/input/input";
import Button from "./component/button/button";
import Form from "./component/form/form";
import "./App.css"
function App() {
  const [userForm, setUserForm] = useState({
    userName: "",
    password: ""
  })
  const onValidation = () => {
    if (userForm.userName === "" || userForm.password === "") {
      alert("Invalid input")
    } else (
      alert("Form is sent")
    )
  }
  return (
    <div className="custom-page">
      <Form>
        <h2>Login Page</h2>
        <Input value={userForm.userName} placeholder={"Username"} onChange={(e) => {
          setUserForm({ ...userForm, userName: e.target.value })
        }} />
        <Input type="password" value={userForm.password} placeholder={"Password"} onChange={(e) => {
          setUserForm({ ...userForm, password: e.target.value })

        }} />
        <Button text="Log in" onClick={() => {
          onValidation();
        }}></Button>
      </Form>

    </div>
  );
}

export default App;
