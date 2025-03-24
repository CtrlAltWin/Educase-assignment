const ProfilePage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-col h-[95vh] mt-5 w-[85vw] border border-gray-300">
        <div className="flex items-center px-5 h-16 w-full shadow-xs bg-white">
          <h1 className="text-lg font-semibold">Account Settings</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center p-5">
            <figure className="relative">
              <img
                src="image.png"
                alt="Profile"
                className="w-14 h-14 rounded-full"
              />
              <div className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-violet-600 flex items-center justify-center border-1 border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-3 h-3"
                >
                  <path d="M9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM12 19C15.3137 19 18 16.3137 18 13C18 9.68629 15.3137 7 12 7C8.68629 7 6 9.68629 6 13C6 16.3137 8.68629 19 12 19ZM12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13C16 15.2091 14.2091 17 12 17Z"></path>
                </svg>
              </div>
            </figure>
            <div className="p-5">
              <h3 className="font-semibold text-sm">Marry Doe</h3>
              <p className="">Marry@Gmail.Com</p>
            </div>
          </div>
          <p className="font-stretch-semi-condensed text-sm px-5">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
        <div className="border-y border-dashed border-gray-300 h-[55vh] mt-5"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
