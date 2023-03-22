interface Props {
  firstName: string;
  secondName?: string;
  bio?: string;
  location?: string;
  company?: string;
  image?: string;
}

const Profile: React.FC<Props> = ({
  firstName,
  secondName,
  bio,
  location,
  company,
  image,
}) => {
  return (
    <section className="px-5 py-10 md:py-12 lg:py-14">
      <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between">
        <div className="mb-8 h-[150px] w-[150px] overflow-hidden rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300 md:mb-0 md:h-[180px] md:w-[180px]">
          <img
            src={image}
            alt="github profile pic"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <p className="font-semibold text-blue-600">
            Olá
            <span className="inline-block w-min animate-wiggle">👋</span>
          </p>
          <h1 className="flex items-center text-xl mb-2 font-bold md:text-3xl">
            <span className="mr-2">Me chamo</span>
            {firstName} {secondName}
          </h1>
          <p className="mb-4 w-full text-sm font-light leading-loose text-[#646464] md:max-w-2xl md:text-base md:leading-loose">
            {bio ? bio : ""}
          </p>
          <div className="mb-4 flex space-x-6">
            {location && (
              <div className="flex items-center space-x-2 text-xs text-blue-600 md:text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#2563EB"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
                <p>{location ? location : ""}</p>
              </div>
            )}
            {company && (
              <div className="flex items-center space-x-2 text-xs text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#2563EB"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"></path>
                </svg>
                <p>{company ? company : ""}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
