import { IRepo, IUser, ServerResponse } from "./../../models/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUser: build.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          // per_page - параметр количества элементов для страницы, прилетающих с сервера.
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
    createUser: build.mutation<any, void>({
      query: () => ``,
    }),
  }),
});

export const { useSearchUserQuery, useLazyGetUserReposQuery } = githubApi;
// useGetUserReposQuery или useLazyGetUserReposQuery? Lazy говорит нам о том, что мы можем
// сделать запрос, когда захотим.
