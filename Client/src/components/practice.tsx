

const practice = () => {
  return (
    <main className="h-[300px] w-[500px] rounded-lg bg-black bg-blue-900/30 p-5 text-xl text-black">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1>Card</h1>
          <h2>subhead</h2>
        </div>
        <div className="h-6 w-6 rounded-full bg-blue-900"></div>
      </div>
      <div className="flex flex-col">
        <div className="item-center border-20 flex h-40 w-40 flex-col justify-center items-center border-[30px] rounded-full border-black bg-blue-900">
          75%
        </div>
      </div>
    </main>
  );
}

export default practice
