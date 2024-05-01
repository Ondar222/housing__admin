import {
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import AnalyticsPage from "../../pages/Analytics";
import { ListPage } from "../../pages/List";
import { ApplicationDetailsPage, ApplicationListPage, ApplicationEditPage } from "../../pages/";
import NotFoundPage from "../../pages/404/404";
import AuthPage from "../../pages/Login/Login";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useAppDispatch";
import { useEffect } from "react";
import { getCredentials } from "../../store/slices/auth";

const Router = () => {
  const { isAuth } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCredentials())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/analytics" element={isAuth ? <AnalyticsPage /> : <Navigate to={"/"} />} />
      <Route path="/application" element={isAuth ? <ApplicationListPage /> : <Navigate to={"/"} />} />
      <Route path="/application/+" element={isAuth ? <ApplicationEditPage /> : <Navigate to={"/"} />} />
      <Route path="/application/:id" element={isAuth ? <ApplicationDetailsPage /> : <Navigate to={"/"} />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}



export default Router;

