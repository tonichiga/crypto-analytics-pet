import MainLayout from "@/widgets/layouts/main";
import ChartPageProvider from "@/widgets/providers/chart-page-provider";

const Chart = () => {
  return (
    <div>
      <MainLayout>
        <ChartPageProvider />
      </MainLayout>
    </div>
  );
};

export default Chart;
