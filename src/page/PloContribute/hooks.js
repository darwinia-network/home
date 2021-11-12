import { useEffect, useState } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";

export const useApi = () => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    // const wsProvider = new WsProvider("wss://rpc.polkadot.io");
    const wsProvider = new WsProvider("wss://polkadot.api.onfinality.io/public-ws");
    ApiPromise.create({ provider: wsProvider })
      .then((_api) => setApi(_api))
      .catch((err) => console.error(err));
  }, []);

  return { api };
};

export const useCurrentBlockNumber = (api) => {
  const [currentBlockNumber, setCurrentBlockNumber] = useState(null);

  useEffect(() => {
    let unsub = null;

    if (api) {
      api.rpc.chain
        .subscribeNewHeads((header) => {
          // console.log(`Chain is at block: #${header.number}`);
          setCurrentBlockNumber(Number(`${header.number}`));
        })
        .then((_unsub) => (unsub = _unsub));
    }

    return () => {
      unsub && unsub();
    };
  }, [api]);

  return { currentBlockNumber };
};
