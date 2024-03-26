import AnalyticsHeader from "../../components/AnalyticHeader/AnalyticHeader";
import FiltrAnalytic from "../../components/FiltrAnalytic/FiltrAnalytic";
import AnalyticGrafic from "../../components/AnalyticGrafic/AnalyticGrafic";
import { Layout } from "../../components/Layout";

export default function AnalyticsPage() {
    return (
        <Layout>
            <AnalyticsHeader />
            <FiltrAnalytic />
            <AnalyticGrafic />
        </Layout>
    )
}