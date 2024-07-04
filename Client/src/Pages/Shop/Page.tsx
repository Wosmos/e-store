import React from "react";

interface Props {
  title: string;
  description: string;
  linkText: string;
}

const Page = (props: Props) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
          <div className="col-span-1 flex flex-col">
            <div className="w-full">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Shop
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Shop our products and services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
