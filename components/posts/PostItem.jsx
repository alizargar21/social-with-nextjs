import Image from "next/image";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import profile from "../../images/profile/IMG_20200929_232208.jpg"
import { FaRegCommentDots } from "react-icons/fa";
import firstImage from "../../images/macos-catalina-mountains-island-daytime-stock-5k-6016x6016-188.jpg";
import { useState } from "react";
import Link from "next/link";
const PostItem = () => {
  const [like, setLike] = useState(false);
  const [show, setShow] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  const handleBookMark = () => {
    setBookMark(!bookMark);
  };

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <article className="h-auto w-full  bg-black px-14 shadow-xl md:px-0 ">
      <div className="center mx-auto mt-6 w-[80%] flex-col ">
        <div className="mb-2 flex w-[80%] md:w-full items-center justify-between">
          <Link href={"/"}>
            <div className="center px-3">
              <Image
                className="mr-2 rounded-full "
                src={profile}
                alt={"me"}
                width={50}
                height={50}
              />
              <span className="text-white text-sm"> {"Ali Zargar"}</span>
            </div>
          </Link>
        </div>
        <div className="w-[80%] md:w-full " onDoubleClick={handleLike}>
          <Image
            src={firstImage}
            className="max-h-[100%] w-full rounded-lg md:rounded-none "
          />
        </div>
        <div className="flex w-[80%] justify-between p-5 md:w-full sm:p-4">
          <div className="center">
            <button onClick={handleLike}>
              {like ? (
                <BsHeartFill className="mr-5 text-rose-600" size={28} />
              ) : (
                <BsHeart
                  size={28}
                  className="mr-5 text-gray-500 duration-300 hover:text-gray-300 "
                />
              )}
            </button>
            <button>
              <FaRegCommentDots
                size={30}
                className="text-gray-500 duration-300 hover:text-gray-300"
              />
            </button>
            <span className="ml-3 text-gray-500 sm:text-[12px]">likes 999</span>
            <span className="ml-3 text-gray-500 sm:text-[12px]">
              comments 999
            </span>
          </div>
          <button onClick={handleBookMark}>
            {bookMark ? (
              <MdBookmarkAdded
                className="text-gray-200 duration-300 hover:text-gray-300"
                size={36}
              />
            ) : (
              <MdBookmarkAdd
                className="text-gray-500 duration-300 hover:text-gray-300"
                size={36}
              />
            )}
          </button>
        </div>
        <div className=" w-[80%] md:w-[90%]">
          <p
            className={
              show
                ? "md:text-md line-clamp-10 font-Roboto  text-sm text-gray-300 sm:text-sm"
                : "md:text-md font-Roboto text-sm  text-gray-300 line-clamp-2 sm:text-sm"
            }
            onClick={() => setShow(!show)}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia
            suscipit cupiditate temporibus iusto dolore molestiae, blanditiis
            omnis reiciendis, deserunt non? Quaerat odit eaque praesentium, aut,
            optio corporis iusto tempore error, similique sapiente voluptate
            dolorum eius repellendus ea unde vero repudiandae! Quibusdam
            incidunt ex laudantium dolore provident magni? Beatae, possimus.
          </p>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
