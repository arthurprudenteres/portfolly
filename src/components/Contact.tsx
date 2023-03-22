interface Props {
  user?: string;
}

const Contact: React.FC<Props> = ({ user }) => {
  return (
    <section className="py-10 px-5">
      <div className="flex flex-col items-center justify-between space-y-5 rounded-lg bg-gradient-to-r from-[#101C5B] to-[#2461FD] h-full w-full px-5 py-10 md:flex-row md:space-x-5 md:space-y-0 md:px-20 md:py-14">
        <div className="w-full">
          <p className="mb-2 text-xl font-semibold text-white md:mb-4 md:text-2xl">
            Entre em contato
          </p>
          <p className="mb-4 flex flex-col text-sm md:text-base font-light leading-loose text-white">
            Precisa de um desenvolvedor? Vamos trabalhar juntos!
          </p>
        </div>
        <div className="flex flex-col space-y-4 w-full md:items-end">
          <a
            target="_blank"
            className="flex w-full items-center justify-center space-x-4 rounded-md bg-white text-sm p-2 hover:shadow-lg hover:shadow-white/50 transition duration-200 md:max-w-[220px]"
            href={`https://github.com/${user}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
            </svg>
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
