import {
  createSlice,
  PayloadAction,
  ThunkAction,
  AnyAction,
} from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import { History } from "history";
import store from "../app/store";
import { supabase } from "../config/config";
import { STUDENT_DASHBOARD, WARDEN_DASHBOARD } from "../constants/routes";

export interface authState {
  loading: boolean;
  error: string | null;
  user: any | null;
  isAuthenticated: boolean;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export const initialState: authState = {
  loading: false,
  error: null,
  user: null,
  isAuthenticated: false,
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
    setUser(state, action: PayloadAction<any | null>) {
      state.user = action.payload;
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
  setUser,
  authFailure,
  authComplete,
} = authSlice.actions;

export default authSlice.reducer;

// vaibhavgarg.exe@gmail.com
// qwertyqwerty

export const login =
  (email: string, password: string, history: History): AppThunk =>
  async (dispatch: any) => {
    try {
      console.log("login");
      dispatch(authStart());

      // --- Login using Supabase ---
      const { user, error } = await supabase.auth.signIn({ email, password });

      if (error || !user?.id) {
        console.log(error);
        dispatch(authFailure(error?.message || "Error in Authentication"));
      } else {
        const { data, error } = await supabase.rpc("get_account_info");
        if (error) {
          console.log(error);
          dispatch(authFailure(error.message || "Could not get user data"));
        } else {
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
          history.push(STUDENT_DASHBOARD);
          dispatch(authComplete());
        }
      }
    } catch (err: any) {
      dispatch(authFailure(err.message));
    }
  };
