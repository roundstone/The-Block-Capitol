import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./form/button";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <div className="flex grow items-center px-6 xl:px-10">
        <div className="mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#FF2F00]">
            Sorry, the page was not found
          </h3>
          <p className="mt-3 text-sm leading-loose text-gray-500 lg:mt-6 lg:text-base lg:leading-loose">
            It is looking like you may have taken a wrong turn. Don&apos;t
            worry... it
            <br className="hidden sm:inline-block" />
            happens to the best of us. Just click the button below to get back
            on track.
          </p>

          <div className="mt-8">
            <Button
              onClick={() => navigate(-1)}
              text="Go Back"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
