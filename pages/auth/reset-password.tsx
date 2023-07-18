import { ReactElement } from "react";
import Card from "@/components/common/card";
import Button from "@/components/common/button";
export default function ResetPassword(): ReactElement {
  return (
    <div>
      <Card>
        <h1 className="text-4xl">Reset Password</h1>
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
            <Button variant="primary" className="select-none">
              Reset
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            You will receive an email with further instructions.
          </p>
        </form>
      </Card>
    </div>
  );
}
