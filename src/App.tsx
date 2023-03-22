import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

interface User {
  login: string;
  name: string;
  bio: string;
  location: string;
  company: string;
  avatar_url: string;
  email: string;
}

function App() {
  const { id } = useParams();

  const [user, setUser] = useState<User>({
    login: "",
    name: "",
    bio: "",
    location: "",
    company: "",
    avatar_url: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        setError("Erro ao buscar as informações do usuário");
      } finally {
        setIsLoadingUser(false);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <div className="App min-h-screen w-full bg-gradient-to-r from-transparent to-[#7f9dea53]">
      <div className="Container mx-auto max-w-5xl">
        <Header
          firstName={user.name.split(" ")[0]}
          secondName={user.name.split(" ")[1]}
        />
        <Profile
          firstName={user.name.split(" ")[0]}
          secondName={user.name.split(" ")[1]}
          bio={user.bio}
          location={user.location}
          company={user.company}
          image={user.avatar_url}
        />
        {isLoadingUser ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            <span>Carregando...</span>
          </div>
        ) : (
          <Projects error={error} user={user.login} />
        )}
        <Contact user={user.login} />
      </div>
    </div>
  );
}

export default App;
