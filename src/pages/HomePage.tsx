import React, { FC, useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import { useDebounce } from "../hooks/debounce";
import { useLazyGetUserReposQuery, useSearchUserQuery } from "../store/github/github.api";

const HomePage: FC = () => {
  // const [search, setSearch] = useState("");
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);

  // хуком useDebounce() мы оптимизировали набор символов в нашем инпуте
  const debounced = useDebounce(search);
  const { data, isLoading, isError } = useSearchUserQuery(debounced, {
    skip: debounced.length < 3,
    // Очень интересная штука, для обновления страницы через автоматический запрос.
    // Как только, окно инпута получает фокус, после какого-то перерыва в работе,
    // запрос осуществляется автоматически, страничка обновляется и становится
    // актуальной на текущий момент времени.
    // Предварительно настраиваем в githubApi стр.9 и store/index.js стр.13
    refetchOnFocus: true,
  });

  const [fetchRepos, { isLoading: isLoadingRepos, data: repos }] = useLazyGetUserReposQuery();

  useEffect(() => {
    // console.log(debounced);
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [data?.length, debounced]);

  const clickHandler = (username: string) => {
    // console.log(username);
    fetchRepos(username);
    setDropdown(false);
  };

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600">Error...</p>}

      <div className="relative w-[560px]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github username..."
        />

        {dropdown && (
          <ul className="list-none absolute top-[42px]  left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
            {isLoading && <p className="text-center">Loading...</p>}
            {data &&
              data.map((user) => (
                <li
                  key={user.id}
                  onClick={() => clickHandler(user.login)}
                  className={"py-2 hover: bg-gray-500 hover:text-white transition-colors cursor-pointer"}
                >
                  {user.login}
                </li>
              ))}
          </ul>
        )}

        <div className="container">
          {isLoadingRepos && <p className="text-center"> Repos loading...</p>}
          {repos?.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
