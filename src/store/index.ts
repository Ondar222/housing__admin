import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { FLUSH, PAUSE, PERSIST, PURGE, PersistConfig, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'
import applicationReducer from "./slices/application/ApplicationSlice"
import housingProgramReducer from "./slices/housing_program/HousingProgramSlice"
import authReducer, { AuthCredentials } from "./slices/auth"
import userReducer from "./slices/user"

const authPersistConfig: PersistConfig<AuthCredentials> = {
    key: 'auth',
    storage,
    // storageSession,
    whitelist: ["isAuth"],
    blacklist: ["isLoading", "access_token", "refresh_token", "expires"]

}

const userPersisConfig = {
    key: 'user',
    storage,
    storageSession
}

const authPersistedReducer = persistReducer(authPersistConfig, authReducer)
const userPersistedReducer = persistReducer(userPersisConfig, userReducer)

const rootReducer = combineReducers({
    application: applicationReducer,
    housing_program: housingProgramReducer,
    auth: authPersistedReducer,
    user: userPersistedReducer,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
        })

})

export const persistor = persistStore(store)
export { store }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch