import UserItem from "./Useritem";
import profileImg from "../../images/profile/IMG_20200701_154309.jpg";
import profileImg2 from "../../images/profile/IMG_20200929_232208.jpg";
import profileImg3 from "../../images/profile/IMG_20150629_193114.jpg";
const UsersContainer = () => {
      return ( <section className="bg-white/10 w-[70%] md:w-[80%] rounded-lg px-3 mx-auto h-auto justify-start items-start flex-col mt-20 py-4">
            <UserItem imageSrc={profileImg}  likes={896} userName={"ali21Zargar"} email={"test@info.com"} posts={85}  />
            <UserItem imageSrc={profileImg2} likes={896} userName={"ali21Zargar"} email={"test@info.com"} posts={85}  />
            <UserItem imageSrc={profileImg}  likes={896} userName={"ali21Zargar"} email={"test@info.com"} posts={85}  />
            <UserItem imageSrc={profileImg3} likes={896} userName={"ali21Zargar"} email={"test@info.com"} posts={85}  />
            <UserItem imageSrc={profileImg}  likes={896} userName={"ali21Zargar"} email={"test@info.com"} posts={85}  />
            <UserItem imageSrc={profileImg3} likes={896} userName={"ali21Zargar"} email={"test@info.com"} posts={85}  />
            <UserItem imageSrc={profileImg2} likes={896} userName={"ali21Zargar"} email={"test@info.com"} posts={85}  />
            <UserItem imageSrc={profileImg3} likes={896} userName={"ali21Zargar"} email={"test@info.com"} posts={85}  />
      
      </section> );
}
 
export default UsersContainer;