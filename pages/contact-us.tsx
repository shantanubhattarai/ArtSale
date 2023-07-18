import Button from "@/components/common/button";
import Card from "@/components/common/card";
import { ReactElement } from "react";

export default function ContactUs(): ReactElement {
  return (
    <div>
      <h1 className="mb-[40px] text-4xl">Contact Us</h1>
      <div className="flex flex-col justify-between gap-20 md:flex-row">
        <div className="w-full">
          <form>
            <div className="mt-8">
              <label htmlFor="name" className="block text-gray-500">
                Name
              </label>
              <input
                name="name"
                className="w-full p-4 bg-transparent border border-gray-400 focus:outline-red-800"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="name" className="block text-gray-500">
                Email
              </label>
              <input
                name="email"
                className="w-full p-4 bg-transparent border border-gray-400 focus:outline-red-800"
                type="email"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="name" className="block text-gray-500">
                Message
              </label>
              <textarea
                name="message"
                className="w-full p-4 bg-transparent border border-gray-400 focus:outline-red-800"
                rows={5}
              />
            </div>
            <div className="mt-4">
              <Button variant="primary" className="select-none" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="w-full max-w-full overflow-hidden list-none">
          <Card>
            <div id="gmap-canvas" className="w-full max-w-full  h-[500px]">
              <iframe
                className="w-full h-full border"
                src="https://www.google.com/maps/embed/v1/view?zoom=12&center=27.7172,85.3240&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
