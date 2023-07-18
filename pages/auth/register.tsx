import { ReactElement, useState } from "react";
import Card from "@/components/common/card";
import Button from "@/components/common/button";
import Link from "next/link";

export default function Register(): ReactElement {
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [passwordVisibilityIcon, setPasswordVisibilityIcon] = useState(true);

  function togglePassword() {
    if (passwordInputType == "password") {
      setPasswordInputType("text");
      setPasswordVisibilityIcon(false);
    } else {
      setPasswordInputType("password");
      setPasswordVisibilityIcon(true);
    }
  }

  function getIconForPasswordToggle(): ReactElement {
    if (passwordVisibilityIcon == true) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline icon icon-tabler icon-tabler-eye -ml-[40px] cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
        </svg>
      );
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-eye-off inline -ml-[40px] cursor-pointer"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
        <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
        <path d="M3 3l18 18" />
      </svg>
    );
  }

  return (
    <div>
      <Card>
        <h1 className="text-4xl">Register</h1>
        <form>
          <div className="mt-8">
            <label htmlFor="email" className="block text-gray-500">
              Email
            </label>
            <input
              name="email"
              className="p-4 bg-transparent border border-gray-400 focus:outline-red-800"
              type="email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="username" className="block text-gray-500">
              Username
            </label>
            <input
              name="username"
              className="p-4 bg-transparent border border-gray-400 focus:outline-red-800"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-gray-500">
              Password
            </label>
            <input
              name="password"
              className="p-4 bg-transparent border border-gray-400 focus:outline-red-800"
              type={passwordInputType}
            />
            <span onClick={() => togglePassword()}>
              {getIconForPasswordToggle()}
            </span>
          </div>
          <Link
            className="text-sm text-red-800 underline select-none"
            href="/auth/reset-password"
          >
            Forgot password?
          </Link>
          <div className="mt-4">
            <Button variant="primary" className="select-none" type="submit">
              Register
            </Button>
          </div>
        </form>
        <div className="mt-8">
          <p>
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium text-red-800">
              Login here
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
