import CardSkeleton from "./card-skeleton";

function JeuxSkeleton() {
  return (
    <div className="px-5 mt-10">
      <div className="w-full  h-10 flex flex-col justify-center items-cente rounded-t-xl mb-3   ">
        <span className="w-full h-full block bg-gray-200 dark:bg-gray-700"></span>
      </div>
      <h2
        className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"
        style={{ width: "50%" }}
      ></h2>
      <h2
        className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 mb-3"
        style={{ width: "25%" }}
      ></h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardSkeleton nombre={10} />
      </div>
    </div>
  );
}

export default JeuxSkeleton;
