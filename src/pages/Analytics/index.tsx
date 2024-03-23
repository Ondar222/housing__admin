import AnalyticsHeaderComponent from "../../components/AnalyticHeader/AnalyticHeader";
import FiltrAnalyticComponent from "../../components/FiltrAnalytic/FiltrAnalytic";
import AnalyticGraficComponent from "../../components/AnalyticGrafic/AnalyticGrafic";
import { Layout } from "../../components/Layout";


export default function AnalyticsPage() {
    return (
        <Layout>
            <AnalyticsHeaderComponent />
            <FiltrAnalyticComponent />
            <AnalyticGraficComponent />
        </Layout>
    )
}