import React, { useState } from "react";
import { InputGroup } from "../../ui/InputGroup";
import { IconTextBox } from "../../ui/IconTextBox";
import { IconAccountCircle } from "../../assets/icons/InterfaceIcons";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "../../ui/PasswordInput";
import { Button } from "../../ui/button/Button";

const INI_FORM_DATA = {
  userName: "",
  password: "",
  rememberMe: false,
};

const LoginPage = () => {
  const [formData, setFormData] = useState(INI_FORM_DATA);
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.userName === "admin" && formData.password === "123") {
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setFormErrors({
        password: "Invalid username or password",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full md:w-auto md:min-w-[500px] bg-black text-white mx-4 md:p-6 p-4 py-8 rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <InputGroup
          label="Username or email"
          labelClassName="font-medium text-white"
          name="userName"
          id="userName"
        >
          <IconTextBox
            prefix={<IconAccountCircle size="20" />}
            name="userName"
            id="userName"
            placeholder="Username or email"
            className="bg-white text-black rounded-md"
            value={formData.userName}
            onChange={handleInputChange}
            autoComplete="username"
          />
        </InputGroup>

        <InputGroup
          name="password"
          id="password"
          label="Password"
          labelClassName="text-white"
          errorMessage={formErrors?.password}
        >
          <PasswordInput
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            hasError={!!formErrors?.password}
            className="bg-white text-black rounded-md"
            autoComplete="current-password"
          />
        </InputGroup>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            className="h-4 w-4 rounded border-gray-300 accent-yellow-500"
          />
          <label htmlFor="rememberMe" className="text-sm font-medium text-white">
            Remember Me
          </label>
        </div>

        <Button
          type="submit"
          variant="secondary"
          className="w-full bg-yellow-500 border-none text-black"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Log In"}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
