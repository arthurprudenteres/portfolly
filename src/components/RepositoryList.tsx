import React, { useEffect, useState } from "react";
import axios from "axios";

interface Repository {
  name: string;
  html_url: string;
  description?: string;
  homepage?: string;
}

interface Props {
  username: string;
}

const RepositoryList: React.FC<Props> = ({ username }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=4`
      );
      setRepositories(response.data);
    };
    fetchRepositories();
  }, [username]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 md:gap-4 lg:grid-cols-2">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="w-full flex flex-col justify-between pt-5 overflow-hidden rounded-md border border-gray-200 bg-white hover:shadow-lg hover:shadow-[#2563EB]/20 transition duration-300 ease-in-out"
          >
            <div className="card px-4 border-b border-gray-200">
              <div className="mb-4 flex">
                <div className="svg"></div>
                <div>
                  <p className="text-lg font-semibold">{repo.name}</p>
                </div>
              </div>
              <div className="w-full">
                <p className="h-10 overflow-hidden text-sm font-medium text-gray-500">
                  {repo.description}
                </p>
              </div>
              <div className="my-5 h-[200px] w-full overflow-hidden rounded-lg border border-gray-200">
                <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#75E6FF] to-[#CD63FF]">
                  <p className="text-lg text-white font-bold">{repo.name}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <a
                target="_blank"
                href={repo.html_url}
                className="flex items-center space-x-2 px-4 py-4 text-sm font-bold text-gray-600 transition duration-200 ease-in-out hover:bg-black hover:text-white group"
              >
                <span>Ver no Github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 256 256"
                  className="fill-black group-hover:fill-white"
                >
                  <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                </svg>
              </a>
              {repo.homepage && <div className="h-8 w-0.5 bg-gray-200"></div>}
              {repo.homepage && (
                <a
                  target="_blank"
                  href={repo.homepage}
                  className="flex items-center space-x-2 px-4 py-4 text-sm font-bold text-gray-600 hover:bg-[#2563EB] hover:text-[#FFFFFF]"
                >
                  <span>Ver Site</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RepositoryList;
