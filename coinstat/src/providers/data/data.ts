import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

    result:any;

    constructor(public _http: HttpClient) {
        // console.log('Hello DataProvider Provider');
    }

    getCoins(coins) {
        let coinlist = '';

        coinlist = coins.join();

        return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + coinlist + "&tsyms=USD");
    }

    getCoin(coin) {
        return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + coin + "&tsyms=USD");
    }

    getChart(coin) {
        return this._http.get("https://min-api.cryptocompare.com/data/histoday?fsym=" + coin + "&tsym=USD&limit=30&aggregate=1");
    }

    allCoins() {
        // let headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

        // return this._http.get("https://min-api.cryptocompare.com/data/all/coinlist", { headers: headers });
        return this._http.get("https://min-api.cryptocompare.com/data/all/coinlist");
    }
}
