import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      const id = user.split("/").filter(Boolean).pop();
      try {
        const response = await axios.get(`https://api.github.com/users/${id}`);
        console.log(response);

        if (response.status === 200) {
          navigate(`/${id}`);
        }
      } catch (error) {
        alert(
          "Usuário não encontrado. Por favor, verifique se o nome do usuário está correto."
        );
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-transparent to-[#7f9dea53] flex justify-center items-center p-5">
      <div className="flex flex-col max-w-md">
        <div className="mb-8 space-y-2">
          <h1 className="text-2xl font-semibold text-black">
            Cole seu perfil do Github{" "}
            <span className="inline-block animate-wiggle">👋</span>
          </h1>
          <p className="text-[#646464] text-sm font-normal">
            Crie um modelo do seu portfólio de maneira fácil e profissional!
            Eleve sua presença online!
          </p>
          <p className="text-xs font-semibold text-blue-600">
            ESTE SITE É APENAS UM OBJETO DE ESTUDO!
          </p>
        </div>
        <div className="mb-2">
          <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
            <input
              onChange={handleInput}
              className="rounded-md p-2 w-full outline-gray-100 hover:shadow-lg transition duration-200"
              type="text"
              name="user"
              id="user"
              placeholder="https://github.com/arthurprudenteres/"
            />
            <button
              className="p-2 bg-blue-600 rounded-lg text-white hover:shadow-lg transition duration-200"
              type="submit"
            >
              Criar Portfólio!
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
