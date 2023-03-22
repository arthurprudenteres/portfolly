interface Props {
  firstName: string;
  secondName: string;
}

const Header: React.FC<Props> = ({ firstName, secondName }) => {
  return (
    <header className="py-10 px-5">
      <a href="/">
        <p className="font-comfortaa space-x-2 text-lg font-semibold md:text-xl text-black">
          <span>{firstName}</span>
          <span className="text-blue-600">{secondName}</span>
        </p>
      </a>
    </header>
  );
};

export default Header;
