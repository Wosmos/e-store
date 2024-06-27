const Category = () => {
  return (
    // main container
    <section className="mt-10 grid h-screen grid-cols-1 gap-6 md:h-[664px] md:grid-cols-2">
      {/* first box */}
      <div
        className="row-span-4 flex flex-col justify-start gap-3 bg-cover bg-center p-8 md:row-span-2 md:p-12"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <h1 className="font-poppins text-[28px] font-[500] leading-[1.12] md:text-[34px]">
          Living Room
        </h1>
        <div className="flex flex-col">
          <a
            href=""
            className="group inline-flex items-center text-[14px] text-[#000000]"
          >
            <span className="peer">Shop Now</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 peer-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <hr className="mt-[1px] h-[1px] w-20 bg-[#000000] md:mt-[1.5px] md:h-[2px]" />
        </div>
      </div>

      {/* second box */}

      <div
        className="flex flex-col justify-end gap-3 bg-[#F2F4F6] bg-cover bg-center p-8 md:p-12"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <h1 className="font-poppins text-[34px] font-[500] leading-[1.12]">
          Living Room
        </h1>
        <div className="flex flex-col">
          <a
            href=""
            className="group inline-flex items-center text-[14px] text-[#000000]"
          >
            <span className="peer">Shop Now</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 peer-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <hr className="mt-[1px] h-[1px] w-20 bg-[#000000] opacity-100 md:mt-[1.5px] md:h-[2px]" />
        </div>
      </div>
      {/* 3rd box */}
      <div
        className="flex flex-col justify-end gap-3 bg-[#F2F4F6] bg-cover bg-center p-8 md:p-12"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <h1 className="font-poppins text-[34px] font-[500] leading-[1.12]">
          Living Room
        </h1>
        <div className="flex flex-col">
          <a
            href=""
            className="group inline-flex items-center text-[14px] text-[#000000]"
          >
            <span className="peer">Shop Now</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 peer-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <hr className="mt-[1px] h-[2px] w-20 bg-[#000000] opacity-100 md:mt-[1.5px]" />
        </div>
      </div>
    </section>
  );
};

export default Category;
