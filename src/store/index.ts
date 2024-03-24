import { configureStore } from "@reduxjs/toolkit"
import ApplicationReducer from "./slices/application/ApplicationSlice"

const store = configureStore({
    reducer: {
        application: ApplicationReducer
    }
})

export { store }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch