import {
  Route,
  Routes
} from "react-router-dom";
import AnalyticsPage from "../../pages/Analytics";
import { ListPage } from "../../pages/List";
import EditPage from "../../pages/Edit";
import NotFoundPage from "../../pages/404/404";
// import App from "../../App";

const Router = () =>
  <Routes>
    <Route path="/" element={<AnalyticsPage />} />
    <Route path="/analytics" element={<AnalyticsPage />} />
    <Route path="/list" element={<ListPage />} />
    <Route path="/edit" element={<EditPage />} />
    <Route path="/*" element={<NotFoundPage />} />
  </Routes>


export default Router;

