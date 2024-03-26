import { configureStore } from "@reduxjs/toolkit"
import applicationReducer from "./slices/application/ApplicationSlice"
import housingProgramReducer from "./slices/housing_program/HousingProgramSlice"
import authReducer from "./slices/auth"
import userReducer from "./slices/user"

const store = configureStore({
    reducer: {
        application: applicationReducer,
        housing_program: housingProgramReducer,
        auth: authReducer,
        user: userReducer,
    }
})

export { store }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch