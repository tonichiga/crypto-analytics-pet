import {
  CryptoCompare,
  CryptoCompareSocialStats,
} from "@/models/cryptocompare";

class CryptoCompareApi {
  private apiKey: string = "";
  private baseUrl: string = "https://min-api.cryptocompare.com/data";
  private static instance: CryptoCompareApi | null = null;
  private statList: CryptoCompareSocialStats[] = [];

  private constructor() {
    if (CryptoCompareApi.instance) {
      return CryptoCompareApi.instance;
    }

    this._setApiKey();
    CryptoCompareApi.instance = this;
  }

  static getInstance(): CryptoCompareApi {
    if (!CryptoCompareApi.instance) {
      CryptoCompareApi.instance = new CryptoCompareApi();
    }
    return CryptoCompareApi.instance;
  }

  async getSybmolPrice(from: string, to: string) {
    const price = await this._getSymbolPrice(from, to);
    console.log(`${from}/${to}`, price);
  }

  async getSocialStats(symbol: string): Promise<CryptoCompareSocialStats[]> {
    const coinData = await this._getCoinData(symbol);
    if (!coinData?.Data) {
      return [];
    }
    const data: { [key: string]: CryptoCompare } = coinData.Data;
    const coinId: string = data[symbol].Id;

    const socialStats = await this._filledStatList(coinId);
    this.statList = [];
    return socialStats;
  }

  private _setApiKey() {
    this.apiKey = process.env.CRYPTOCOMPARE_API_KEY || "";
  }

  private async _getCoinData(
    symbol: string
  ): Promise<{ Data: { [key: string]: CryptoCompare } } | undefined> {
    try {
      const response = await fetch(
        `${this.baseUrl}/all/coinlist?fsym=${symbol}`,
        {
          headers: {
            authorization: this.apiKey,
          },
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.log("_getCoinId", error);
    }
  }

  private async _getSymbolPrice(from: string, to: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/price?fsym=${from}&tsyms=${to}`,
        {
          headers: {
            authorization: this.apiKey,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("_getSymbolPrice", error);
    }
  }

  private async _getSocialStats(
    coinId: string,
    toTimestamp?: number
  ): Promise<{ Data: CryptoCompareSocialStats[] } | undefined> {
    try {
      console.log("toTimestamp", toTimestamp);
      const response = await fetch(
        `${this.baseUrl}/social/coin/histo/day?limit=${100}&aggregate=1${
          toTimestamp ? `&toTs=${toTimestamp}&` : "&"
        }coinId=${coinId}&api_key=${this.apiKey}`,
        {
          headers: {
            authorization: this.apiKey,
          },
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.log("_getSocialStats", error);
    }
  }

  private async _filledStatList(
    coinId: string,
    toTimestamp?: number
  ): Promise<CryptoCompareSocialStats[]> {
    const stats = await this._getSocialStats(coinId, toTimestamp);

    if (!stats?.Data) {
      return [];
    }

    const reverseList = stats.Data.reverse();

    this.statList = [...this.statList, ...reverseList];

    console.log("statList", this.statList.length);

    if (stats.Data.length > 1 && this.statList.length < 365) {
      toTimestamp = reverseList[reverseList.length - 1].time;

      return await this._filledStatList(coinId, toTimestamp);
    }

    return this.statList.reverse();
  }
}

const cryptoCompateApi = CryptoCompareApi.getInstance();
export default cryptoCompateApi;
