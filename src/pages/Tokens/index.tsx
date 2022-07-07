import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import Hero from "../../components/Hero";
import { useTokensData } from "../../data/tokens";
import Statistics from "../../components/Statistics";
import { useEffect, useState } from "react";
import http from "../../http";
import { StatisticsData } from "../../data/types";
import localeKeys from "../../locale/localeKeys";
import { useTranslation } from "react-i18next";
import ring from "../../assets/images/ring.svg";
import kTon from "../../assets/images/kton.svg";
import { AxiosResponse } from "axios";
import { formatBalance } from "../../utils";

interface Supply {
  circulatingSupply: string;
  maxSupply: string;
  initialSupply: string;
  totalSupply: string;
}

interface ServerResponse<T> {
  code: number;
  data: T;
  msg: string;
}

const Tokens = () => {
  const { footerData } = useFooterData();
  const { t } = useTranslation();
  const { heroData, tokenStatistics, stakingModelData, ringInflationModel } = useTokensData();
  const [isLoadingTokenData, setLoadingTokenData] = useState(true);
  const [liveTokenStatistics, setLiveTokenStatistics] = useState(tokenStatistics);

  useEffect(() => {
    fetchData();
    console.log(isLoadingTokenData);
  }, []);

  const prepareTokenStatistics = (title: string, image: string, supply: Supply): StatisticsData => {
    const minDecimalPoints = 0;
    const maxDecimalPoints = 10;
    return {
      title,
      image,
      data: [
        {
          info: t(localeKeys.initialSupply),
          figure:
            supply.initialSupply === "--"
              ? "--"
              : formatBalance(supply.initialSupply, minDecimalPoints, maxDecimalPoints),
        },
        {
          info: t(localeKeys.circulatingSupply),
          figure: formatBalance(supply.circulatingSupply, minDecimalPoints, maxDecimalPoints),
        },
        {
          info: t(localeKeys.totalSupply),
          figure: formatBalance(supply.totalSupply, minDecimalPoints, maxDecimalPoints),
        },
      ],
    };
  };

  const fetchData = async () => {
    try {
      setLoadingTokenData(true);
      setLiveTokenStatistics((oldData) => {
        return {
          ...oldData,
          data: [],
        };
      });

      const resultsList = await Promise.all([loadRingData(), loadKTonData()]);
      console.log(resultsList);
      resultsList.forEach((result, index) => {
        if (result.data.code !== 0) {
          return;
        }
        const supply = result.data.data;
        switch (index) {
          case 0: {
            // static number
            supply.initialSupply = "2000000000";
            const ringStatistics = prepareTokenStatistics(t(localeKeys.ring), ring, supply);
            setLiveTokenStatistics((oldData) => {
              return {
                ...oldData,
                data: [...(oldData.data ?? []), ringStatistics],
              };
            });
            break;
          }
          case 1: {
            // static number
            supply.initialSupply = "--";
            const kTonStatistics = prepareTokenStatistics(t(localeKeys.kTon), kTon, supply);
            setLiveTokenStatistics((oldData) => {
              return {
                ...oldData,
                data: [...(oldData.data ?? []), kTonStatistics],
              };
            });
            break;
          }
        }
      });
      setLoadingTokenData(false);
    } catch (e) {
      setLoadingTokenData(false);
      // ignore the error
    }
  };

  const loadRingData = (): Promise<AxiosResponse<ServerResponse<Supply>>> => {
    return http.get<ServerResponse<Supply>>({ path: "/supply/ring" });
  };

  const loadKTonData = (): Promise<AxiosResponse<ServerResponse<Supply>>> => {
    return http.get<ServerResponse<Supply>>({ path: "/supply/kton" });
  };

  return (
    <div>
      <Hero page={"TOKENS"} data={heroData} />
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <Statistics data={liveTokenStatistics} />
      </div>
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <Statistics data={stakingModelData} />
      </div>
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <Statistics data={ringInflationModel} />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default Tokens;
