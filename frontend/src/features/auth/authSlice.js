import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import authService from "./authService";

const userAdapter = createEntityAdapter();

const user = JSON.parse(localStorage.getItem("user"));

const initialState = userAdapter.getInitialState({
  user: user ? user : null,
  isError: null,
  isSuccess: false,
  isLoading: false,
  message: "",
  token: null,
});

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const response = await getUsers();

  return response.data;
});

export const updateUser = createAsyncThunk("user/updateUser", async (user) => {
  const response = await updateUser(user);

  return response.data;
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  const response = await deleteUser(id);

  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    token: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    message: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload.token;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload._doc));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(getUsers.pending, (state) => {
        state.message = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.message = "loaded";
        userAdapter.setAll(state, action.payload);
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.message = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.message = "saved";
        userAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })

      .addCase(deleteUser.pending, (state) => {
        state.message = "loading";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.message = "deleted";
        userAdapter.removeOne(state, action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      });
  },
});

export const { selectAll: selectAllUsers } = userAdapter.getSelectors(
  (state) => state?.user
);
export const { reset } = authSlice.actions;
export default authSlice.reducer;
