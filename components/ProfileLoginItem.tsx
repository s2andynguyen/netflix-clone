import Image from "next/image";
function ProfileLoginItem() {
  return (
    <div className="">
        <div className="group w-44 mx-auto">
          <Image
            className="flex justify-center items-center rounded-md border-2 border-transparent 
                  group-hover:border-white overflow-hidden"
            src={'/images/default-blue.png'}
            width={176}
            height={176}
            alt="image"
          />
          <div className="text-gray-400 mt-4 text-2xl group-hover:text-white text-center">
            Name
          </div>
        </div>
    </div>
  );
}

export default ProfileLoginItem;
