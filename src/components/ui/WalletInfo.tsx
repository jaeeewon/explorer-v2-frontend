import { useEffect, useState } from "react";
import { Text } from "grommet";

interface IWallet {
  wallet: string;
}

export function WalletInfo(props: IWallet) {
  const { wallet } = props;

  const [walletInfo, setWalletInfo] = useState("loading-info");

  useEffect(() => {
    info_fetcher();
    async function info_fetcher() {
      const resp = await fetch(
        `https://proxy.pleizz.com/www/apply-single-wallet-info?wallet=${wallet}`
      );
      setWalletInfo(await resp.text());
    }
  }, []);

  return (
    <Text
      size="small"
      style={{
        minWidth: "125px",
        display: "inline-block",
        whiteSpace: "nowrap",
        textAlign:'left'
      }}
      color="minorText"
      title={walletInfo}
    >
      {walletInfo}
    </Text>
  );
}
