import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const initialState = {
  users: [],
};

export const fetchUsers = createAsyncThunk(
  "getusers/all",
  async (datalogin) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/users`);
      let datausers = response.data;
      const logincondition = datausers.find(
        (item) =>
          item.username === datalogin.username &&
          item.password === datalogin.password
      );
      if (logincondition) {
        localStorage.setItem("userid", logincondition.id);
        localStorage.setItem("token", logincondition.address.zipcode);
        window.location.reload();
        return console.log("login success");
      } else {
        return console.log("failed");
      }
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
      window.location.reload();
    },
    UnPrivateRoute: () => {
      let Isfalse = localStorage.getItem("token");
      Isfalse ? <Outlet /> : <Navigate to="/login" />;
    },
    PrivateRoute: () => {
      let Isfalse = localStorage.getItem("token");
      Isfalse ? <Navigate to="/" /> : <Outlet />;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const getAllUsers = (state) => state.users;
export const { logout, PrivateRoute, UnPrivateRoute } = usersSlice.actions;
export default usersSlice.reducer;
