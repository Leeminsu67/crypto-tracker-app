import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

const Chart = () => {
  const coinId = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(`${coinId}`)
  );

  // 우리가 보고자 하는 암호화폐가 무엇인지 알아야된다.
  return <h1>Chart</h1>;
};

export default Chart;
