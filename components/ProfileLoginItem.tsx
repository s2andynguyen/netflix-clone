'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
function ProfileLoginItem({user}:{user:any}) {
  const router = useRouter();

  return (
    <div className="cursor-pointer" onClick={() => {router.push('/')}}>
        <div className="group w-44 mx-auto">
          <Image
            className="flex justify-center items-center rounded-md border-2 border-transparent 
                  group-hover:border-white overflow-hidden"
            src={user.image}
            width={176}
            height={176}
            alt="image"
          />
          <div className="text-gray-400 mt-4 text-2xl group-hover:text-white text-center">
            {user.name}
          </div>
        </div>
    </div>
  );
}

export default ProfileLoginItem;
