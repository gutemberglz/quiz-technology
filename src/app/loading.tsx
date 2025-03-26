export default function Loading() {
  console.log("loading server");
  return (
    <div className="w-screen h-screen  flex items-center justify-center">
      <div className="size-20 shadow-md rounded-xl flex justify-center items-center">
        <div className="size-10 border-[3px] rounded-full border-gray-500/50 border-r-black animate-spin"></div>
      </div>
    </div>
  );
}
