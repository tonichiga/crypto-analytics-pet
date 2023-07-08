class CoinMarketCalController {
  apiKey: string = "";
  baseUrl: string = "https://developers.coinmarketcal.com/v1";

  constructor() {
    this._setApiKey();
  }

  _setApiKey() {
    this.apiKey = process.env.CRYPTOCOMPARE_API_KEY || "";
  }

  async getSybmolPrice(from: string, to: string) {
    const price = await this._getSymbolPrice(from, to);
    console.log(`${from}/${to}`, price);
  }

  async _getSymbolPrice(from: string, to: string) {
    try {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`,
        {
          headers: {
            "x-api-key": this.apiKey,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("_getSymbolPrice", error);
    }
  }
}

const coinMarketCalController = new CoinMarketCalController();

export default coinMarketCalController;
