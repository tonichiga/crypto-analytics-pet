import cryptoCompateApi from "@/api/cryptocompare";
import ChartArea from "@/widgets/charts/linear-chart";
import MainLayout from "@/widgets/layouts/main";
import ChartPageProvider from "@/widgets/providers/chart-page-provider";
import { GetServerSideProps } from "next";
import Image from "next/image";

const Chart = ({
  series = [{ data: [] }],
}: {
  series: [{ data: string[] }];
}) => {
  // console.log("socialHistory", socialHistory.length);
  // const chartSeries = socialHistory.map((item) => item);

  return (
    <div>
      <MainLayout>
        <ChartPageProvider />
      </MainLayout>
    </div>
  );
};

export default Chart;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const socialHistory = await cryptoCompateApi.getSocialStats("ETH");
//   const seriesList = socialHistory.map((item) => item.posts);
//   const series = [
//     {
//       data: seriesList,
//     },
//   ];

//   return { props: { series } };
// };
