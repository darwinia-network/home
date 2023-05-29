import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { utils } from "ethers";

interface MetaMaskAddChainCfg {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[];
}

const chainConfig: MetaMaskAddChainCfg = {
  chainId: utils.hexlify(46),
  chainName: "Darwinia",
  nativeCurrency: {
    name: "RING",
    symbol: "RING",
    decimals: 18,
  },
  rpcUrls: ["https://rpc.darwinia.network/"],
  blockExplorerUrls: ["https://darwinia.subscan.io/"],
};

export const MetamaskAddDarwiniaChain = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const disabled = typeof window.ethereum === "undefined";

  const handleClick = useCallback(async () => {
    if (!disabled) {
      try {
        setLoading(true);

        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainConfig.chainId }],
        });
        setLoading(false);
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if ((switchError as { code: number }).code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [chainConfig],
            });
            setLoading(false);
          } catch (addError) {
            // handle "add" error
            setLoading(false);
          }
        } else {
          // handle other "switch" errors
          setLoading(false);
        }
      }
    }
  }, []);

  return (
    <button
      disabled={disabled || loading}
      onClick={handleClick}
      className="btn-primary relative hover:bg-white disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-white"
    >
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
          <div className="animate-spin h-5 w-5 rounded-full border-t-[2px] border-r-[2px] border-t-slate-100 border-r-slate-100" />
        </div>
      )}
      {t("Add Darwinia Chain to MetaMask")}
    </button>
  );
};
