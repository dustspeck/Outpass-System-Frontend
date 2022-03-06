import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_ROLE } from "../constants/userRoles";

export interface authState {
  loading: boolean;
  error: string | null;
  user: any;
  isAuthenticated: boolean;
  email: string;
  registrationNo: string;
  name: string;
  userId: string;
  role: USER_ROLE;
}

export const initialState: authState = {
  loading: false,
  error: null,
  user: null,
  isAuthenticated: false,
  email: "",
  name: "",
  registrationNo: "",
  role: USER_ROLE.STUDENT,
  userId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setRole(state, action: PayloadAction<USER_ROLE>) {
      state.role = action.payload;
    },
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    authFailure(state, action: PayloadAction<string | null>) {
      state.loading = false;
      state.error = action.payload ? action.payload : "Error in Authentication";
    },
    authComplete(state) {
      state.loading = false;
    },
  },
});

export const {
  authStart,
  setIsAuthenticated,
  setEmail,
  setName,
  setRole,
  setUserId,
  authFailure,
  authComplete,
} = authSlice.actions;

export default authSlice.reducer;
