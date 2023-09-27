import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { UserReducer } from "../services/user/user.slice";
import { StudentReducer } from "../services/dashboard/dashboard.slice";

export type RootReducer = {
	user: Reducer<UserReducer, AnyAction>;
	student: Reducer<StudentReducer, AnyAction>
};
