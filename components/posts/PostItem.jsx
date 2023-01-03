import Image from "next/image";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import firstImage from "../../images/macos-catalina-mountains-island-daytime-stock-5k-6016x6016-188.jpg";
import { useState } from "react";
const PostItem = () => {
  const [like , setLike] = useState(false)
  const handleLike = ()=> {
    setLike(!like)
  }
  return (
    <article className="h-auto w-full  bg-black px-14 shadow-xl md:px-0 ">
      <div className="center mx-auto mt-6 w-full flex-col ">
        <div className="w-[80%] md:w-full ">
          <Image
            src={firstImage}
            className="max-h-[100%] w-full rounded-lg md:rounded-none "
          />
        </div>
        <div className="flex w-full justify-between p-5 sm:p-4">
          <div className="center ">
            <button onClick={handleLike}>
            {like ? <BsHeartFill  className="mr-5 text-rose-600" size={28}/> :     <BsHeart size={28} className="mr-5 text-gray-500" />}
          
            </button>
            <button>
              <FaRegCommentDots size={30} className="text-gray-500" />
            </button>
            <span className="ml-3 text-gray-500 sm:text-[12px]">likes 999</span>
            <span className="ml-3 text-gray-500 sm:text-[12px]">
              comments 999
            </span>
          </div>
          <button>
           
            <MdOutlineBookmarkAdd className="text-gray-500" size={36} />
          </button>
        </div>
    <div className="px-4">
    <p className=" md:text-md text-lg text-gray-200  sm:text-sm">
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
