import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { GetUrl, PostUrl } from "../BaseUrl";

export const handleLoginUser = createAsyncThunk(
  "auth/handleLoginUser",
  async ({ user, password, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("user/login", {
        data: { meta: { language: "en" }, payload: { user, password } },
        signal: signal.current.signal,
        headers: {
          meta: {
            language: "en",
          },
        },
      });
      return response.data;
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error?.response?.data);
      }
    }
  },
);
const initialState = {
  loading: false,
  error: null,
  user: null,
  loggedIn: false,
  isIdleTimerStart: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogout: (state) => {
      state.loggedIn = false;
      state.isIdleTimerStart = false;
      state.user = null;
      window.localStorage.setItem("timer", JSON.stringify(0));
      window.location.href = window.location.href.concat("login");
      window.localStorage.clear();
    },

    handleChangeLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
    },
    handleChangeIsIdleTimerStart: (state, { payload }) => {
      state.isIdleTimerStart = payload;
    },
    handleChangeUser: (state, { payload }) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    // login user
    builder.addCase(handleLoginUser.pending, (state, {}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(handleLoginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload?.user;
      state.error = null;
    });
    builder.addCase(handleLoginUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.user = null;
      state.error = payload ?? null;
    });
  },
});

export const {
  handleLogout,
  handleChangeIsIdleTimerStart,
  handleChangeLoggedIn,
  handleChangeUser,
} = AuthSlice.actions;

export default AuthSlice.reducer;
