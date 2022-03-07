import {
  createSlice,
  PayloadAction,
  ThunkAction,
  AnyAction,
} from "@reduxjs/toolkit";
import { USER_ROLE } from "../constants/userRoles";
import store from "../app/store";
import { supabase } from "../config/config";
import { User } from "@supabase/supabase-js";
export interface authState {
  loading: boolean;
  error: string | null;
  user: User | null;
  isAuthenticated: boolean;
  email: string;
  registrationNo: string;
  name: string;
  userId: string;
  role: USER_ROLE;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export const login =
  (email: string, password: string, history: History): AppThunk =>
  async (dispatch: any) => {
    try {
      console.log("login");
      dispatch(authStart());

      let { user, error } = await supabase.auth.signIn({ email, password });
      console.log(user, error);
      if (error) throw error.message;

      dispatch(setUser(user));

      // according to role Push to dashboard
      // history.replaceState(null, "", "/route");
      history.pushState(null, "", "/route");

      // TODO: prompt user with success message

      dispatch(setIsAuthenticated(true));
      dispatch(authComplete());
    } catch (err: any) {
      dispatch(authFailure(err.message));
    }
  };

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
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
    // setEmail(state, action: PayloadAction<string>) {
    //   state.email = action.payload;
    // },
    // setName(state, action: PayloadAction<string>) {
    //   state.name = action.payload;
    // },
    // setRole(state, action: PayloadAction<USER_ROLE>) {
    //   state.role = action.payload;
    // },
    // setUserId(state, action: PayloadAction<string>) {
    //   state.userId = action.payload;
    // },
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
  setUser,
  // setEmail,
  // setName,
  // setRole,
  // setUserId,
  authFailure,
  authComplete,
} = authSlice.actions;

export default authSlice.reducer;
