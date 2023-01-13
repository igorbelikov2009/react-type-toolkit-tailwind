import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (build) => ({
    searchUser: build.query<any, string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
        },
      }),
    }),
  }),
});

export const { useSearchUserQuery } = githubApi;
