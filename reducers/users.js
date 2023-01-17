import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    price: 0,
    username: null,
    token: null,
    password: null,
    email: null,
    profil: [],
    photo:
      "https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?b=1&s=170667a&w=0&k=20&c=HEO2nP4_uEAn0_JzVTU6_Y5hyn-qHxyCrWWTirBvScs=",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.password = action.payload.password;
      state.value.email = action.payload.email;
    },
    logout: (state) => {
      state.value.username = null;
      state.value.email = null;
      state.value.token = null;
      state.value.photo =
        "https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?b=1&s=170667a&w=0&k=20&c=HEO2nP4_uEAn0_JzVTU6_Y5hyn-qHxyCrWWTirBvScs=";
    },
    addProfil: (state, action) => {
      state.value.profil.push(action.payload.profil);
    },
    addPhoto: (state, action) => {
      state.value.photo = action.payload;
    },
    addPrice: (state, action) => {
      state.value.price = action.payload;
    },
  },
});

export const { login, logout, addProfil, addPhoto, addPrice } =
  userSlice.actions;
export default userSlice.reducer;
