// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import CatalogueVideo from "../components/CatalogueVideo.jsx";
// import '../index.css';
// function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     role: "",
//     email: "",
//     password: "",
//     subject: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate a signup API call
//     setTimeout(() => {
//       console.log(formData);
//       setIsLoading(false);
//       navigate("/");
//     }, 2000);
//   };

//   return (
//     <div>
//       <CatalogueVideo />
//     <div className="container">
//       <div className="form-container sign-up">
//         <form onSubmit={handleSubmit}>
//           <h1>Create Account</h1>
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? "Registering..." : "Register"}
//           </button>
//         </form>
//       </div>
//       <TogglePanel />
//     </div>
//     </div>
//   );
// }



// export default Register;
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { BASE_URL } from "../components/data/data.jsx";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import CatalogueVideo from "../components/CatalogueVideo.jsx";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z
    .string()
    .email({ message: "Enter a valid email address" })
    .min(1, { message: "Email address is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const onSubmit = async (values) => {
    await fetch(`${BASE_URL}/register`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "fail") {
          toast.error(data.message);
        } else {
          const user = data.user;
          const accessToken = data.access_token;

          // save user session to local storage
          localStorage.setItem(
            "session",
            JSON.stringify({ user, accessToken })
          );
          toast.success(data.message);

          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <CatalogueVideo />
      <div className="container">
        <div className="form-container sign-in">
          <Form onSubmit={form.handleSubmit(onSubmit)}>
          <h1>Register</h1>
            <Controller
              control={form.control}
              name="username"
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3" controlId="formBasicUserName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Enter Username"
                  />
                  {fieldState.invalid && (
                    <Form.Text className="text-danger">
                      {fieldState.error.message}
                    </Form.Text>
                  )}
                </Form.Group>
              )}
            />
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    {...field}
                    type="email"
                    placeholder="Enter email"
                  />
                  {fieldState.invalid && (
                    <Form.Text className="text-danger">
                      {fieldState.error.message}
                    </Form.Text>
                  )}
                </Form.Group>
              )}
            />
            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    {...field}
                    type="password"
                    placeholder="Password"
                  />
                  {fieldState.invalid && (
                    <Form.Text className="text-danger">
                      {fieldState.error.message}
                    </Form.Text>
                  )}
                </Form.Group>
              )}
            />

            <Button
              variant="primary"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Registering..." : "Register"}
            </Button>
          </Form>
        </div>
        <TogglePanel />
      </div>
    </div>
  );
}
const LoginButton = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/login");
  };

  return (
    <Button className="btn-register" onClick={handleRegisterClick}>
      Log-in
    </Button>
  );
};
const HomeButton = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/");
  };

  return (
    <Button className="btn-register" onClick={handleRegisterClick}>
      Home
    </Button>
  );
};

function TogglePanel() {
  return (
<div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-right">
          <h1>Hello, Friend!</h1>
          <p>If you have an account already <br/>click below to log in</p>
          <LoginButton />
          <p>If you prefer to continue browsing, <br/>
          return by clicking here.</p>
          <HomeButton/>
        </div>
      </div>
    </div>
  );
}
