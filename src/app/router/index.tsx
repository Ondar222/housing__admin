import {
    Route,
    Routes
  } from "react-router-dom";
import AnalyticsPage from "../../pages/Analytics";
import ListPage from "../../pages/List";
import EditPage from "../../pages/Edit";
import App from "../../App";
// import App from "../../App";
  
  const Router = () =>
    <Routes>
        <Route path="/" element={<App />} />
      <Route path="/analytics" element={<AnalyticsPage/>} />
      <Route path="/list" element={<ListPage/>} />
      <Route path="/edit" element={<EditPage/>} />
      
      <Route path="/404" element={<div></div>} />
    </Routes>
  
  
  export default Router;
  
  