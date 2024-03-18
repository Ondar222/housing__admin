import AnalyticsHeaderComponent from "../../components/AnalyticHeader/AnalyticHeader";
import FiltrAnalyticComponent from "../../components/FiltrAnalytic/FiltrAnalytic";
import LayoutSidebar from "../../components/LayoutSidebar/LayoutSidebar";
import AnalyticGraficComponent from "../../components/AnalyticGrafic/AnalyticGrafic";


export default function AnalyticsPage() {
    return <div style={{width: "1095px"}}>
        <LayoutSidebar />
        <AnalyticsHeaderComponent />
        <FiltrAnalyticComponent />
        <AnalyticGraficComponent />
    </div>
 
  }