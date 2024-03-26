import {
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import AnalyticsPage from "../../pages/Analytics";
import { ListPage } from "../../pages/List";
import EditPage from "../../pages/Edit";
import NotFoundPage from "../../pages/404/404";
import AuthPage from "../../pages/Login/Login";
import { useAppSelector } from "../../store/hooks/useAppDispatch";

const Router = () => {
  const { isAuth } = useAppSelector((state) => state.auth)
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/analytics" element={isAuth ? <AnalyticsPage /> : <Navigate to={"/"} />} />
      <Route path="/list" element={isAuth ? <ListPage /> : <Navigate to={"/"} />} />
      <Route path="/edit" element={isAuth ? <EditPage /> : <Navigate to={"/"} />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}



export default Router;

