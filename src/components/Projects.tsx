import RepositoryList from "./RepositoryList";

interface Props {
  error: string | null;
  user: string;
}

const Projects: React.FC<Props> = ({ error, user }) => {
  return (
    <section className="py-10 px-5 md:py-12 lg:py-14">
      <div className="mb-8">
        <p className="mb-2 text-xl md:text-2xl font-semibold">Projetos em destaque</p>
        <p className="w-full md:max-w-lg text-sm font-light leading-loose text-[#646464]">
          Selecionei a dedo alguns dos meus projetos mais notáveis e inovadores
          que destacam minhas habilidades e capacidades como desenvolvedor.
        </p>
      </div>
      {error ? (
        <div className="text-center">{error}</div>
      ) : (
        <RepositoryList username={user} />
      )}
    </section>
  );
};

export default Projects;
