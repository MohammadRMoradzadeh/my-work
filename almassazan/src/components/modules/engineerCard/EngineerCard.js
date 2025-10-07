import { searchNormal } from "@/utils/icons";

function EngineerCard({
  isEnLang = false,
  name = "name",
  role = "role",
  image = null,
}) {
  return (
    <>
      <div className="group w-36 md:w-60 aspect-[71/95] relative rounded-lg overflow-hidden">
        <div className="w-full aspect-[140/121] md:aspect-[140/0] md:group-hover:animation-height bg-BG-500 md:bg-text-500 absolute bottom-0 right-0 rounded-lg "></div>
        <div className="w-full h-full absolute top-0 right-0  pt-3 md:pt-6">
          <div className="w-[calc(100%-24px)] md:w-[calc(100%-48px)] aspect-[58/65] mx-auto      border-2 border-white rounded-2xl md:border-none  relative">
            <img
              src={image ? image : "/images/no-image.jpg"}
              alt=""
              className="w-full h-full rounded-2xl object-cover"
            />
            <div
              className="absolute w-full h-full top-0 right-0 hidden md:group-hover:flex border-2 border-BG-500 backdrop-blur-sm bg-filter-white-20  rounded-2xl   flex-col
             items-center gap-y-6 pt-10"
            >
              {searchNormal("#fff", "48", "Outline")}
              <p className="text-Pinar-Medium text-2xl text-white">
                {isEnLang ? "View Resume" : "مشاهده رزومه"}
              </p>
            </div>
          </div>
          <div className="w-full  flex flex-col items-center pt-1 gap-y-1  md:pt-2  md:gap-y-2">
            <p className="text-Pinar-Bold text-xs md:text-xl text-primary-500 md:text-text-500 md:group-hover:text-BG-500">
              {name}
            </p>
            <p className="text-Pinar-Bold text-xs md:text-xl md:text-primary-500 text-text-500">
              {role}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EngineerCard;
