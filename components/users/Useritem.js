import Image from "next/image";

const UserItem = ({imageSrc , alt , userName , email , posts , likes}) => {
  return (
    <article className="flex  text-white justify-between w-[90%] md:w-full  hover:bg-white/20 rounded-lg mx-auto  mb-4 items-center px-6 py-2">
      <div className="rounded-full">
        <Image className="rounded-[100%]" src={imageSrc} alt={alt} width={50} height={50} />
      </div>
      <div className="flex-col flex text-[10px] justify-between h-full ">
        <strong className="">{userName}</strong>
        <span>{email}</span>
      </div>
      <div className="text-[10px] font-thin flex flex-col">
        <span>{`Posts  ${posts}`}</span>
        <span>{`Likes ${likes}`}</span>
      </div>
    </article>
  );
};

export default UserItem;
