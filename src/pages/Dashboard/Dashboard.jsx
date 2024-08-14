import DashboardLayout from "../../components/DashboardLayout";
import PorfolioSection from "./components/PorfolioSection";
import PriceSection from "./components/PriceSection";

const Dashboard = ({}) => {
  return (
  <DashboardLayout title="Dashboard">
    <PorfolioSection />
    <PriceSection />
  </DashboardLayout>
  );
};

export default Dashboard;
