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
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setIsLoading(true);
    await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
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

          navigate("/");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      <CatalogueVideo />
      <div className="container">
        <div className="form-container sign-in">
          <Form onSubmit={form.handleSubmit(onSubmit)}>
            <h1>Log-In</h1>
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control {...field} type="email" placeholder="Enter email" />
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
                  <Form.Control {...field} type="password" placeholder="Password" />
                  {fieldState.invalid && (
                    <Form.Text className="text-danger">
                      {fieldState.error.message}
                    </Form.Text>
                  )}
                </Form.Group>
              )}
            />
            <Link to="#" className="forgot-password">
              Forgot Your Password?
            </Link>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log-in"}
            </button>
          </Form>
        </div>
        <TogglePanel />
      </div>
    </div>
  );
}
const RegisterButton = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <Button className="btn-register" onClick={handleRegisterClick}>
      Register
    </Button>
  );
};
const HomeButton = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/catalogue");
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
          <h1>Welcome, Back!</h1>
          <p>
            Register if you don't have an account.
          </p>
          <RegisterButton />
          <p>If you prefer to continue browsing , <br/>
          return by clicking here.</p>
          <HomeButton/>
        </div>
      </div>
    </div>
  );
}
