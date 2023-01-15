import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_FAV_KEY = "rfk";

interface GithubState {
  favourites: string[];
}

const initialState: GithubState = {
  //   favourites: [], // теперь, по умолчанию, favourites берём из localStorage
  // Парсим содержимое localStorage по ключу LS_FAV_KEY, если его нет, то
  // будем парсить пустой массив.
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "github",
  initialState: initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload);
      // После удаления нам необходимо обновить localStorage
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
  },
});

export const githubAction = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
// Регистрируем редюсер в сторе
