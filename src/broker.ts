import endpoints from "./endpoints";
import { BrokerAccount, DefaultCredentials, Endpoints, OAuthCredentials, RequestAccount } from "./entities";
import parse from "./parse";
import isofetch from 'isomorphic-unfetch';
import qs from 'qs';


const unifetch = typeof fetch !== 'undefined' ? fetch : isofetch;
export class AlpacaBroker {
    private baseURLs: Endpoints = endpoints;
  
    constructor(
      public params: {
        rate_limit?: boolean;
        endpoints?: Endpoints | Map<keyof Endpoints, any>;
        credentials?: DefaultCredentials | OAuthCredentials;
      },
    ) {}
  
    async createAccount(newAccount: RequestAccount): Promise<BrokerAccount> {
      return parse.create(
        await this.request({
          method: 'POST',
          url: this.baseURLs.rest.broker_accounts_v1,
          data: newAccount,
          isJSON: true,
        })
      );
    }
  
    private async request<T = any>(params: {
      method: 'GET' | 'DELETE' | 'PUT' | 'PATCH' | 'POST';
      url: string;
      data?: { [key: string]: any };
      isJSON?: boolean;
    }): Promise<T> {
      let headers: any = {};
  
      if ('access_token' in this.params.credentials) {
        headers[
          'Authorization'
        ] = `Bearer ${this.params.credentials.access_token}`;
      } else {
        const userPass = `${this.params.credentials.key}:${this.params.credentials.secret}`
        headers['Authorization'] = `Basic ${Buffer.from(userPass, "utf8").toString("base64")}`
      }
  
      // if (this.params.credentials.paper) {
      //   params.url = params.url.replace('api.', 'paper-api.');
      // }
  
      let query = '';
  
      if (params.data) {
        // translate dates to ISO strings
        for (let [key, value] of Object.entries(params.data)) {
          if (value instanceof Date) {
            params.data[key] = (value as Date).toISOString();
          }
        }
  
        // build query
        if (!['POST', 'PATCH', 'PUT'].includes(params.method)) {
          query = '?'.concat(qs.stringify(params.data));
          params.data = undefined;
        }
      }
  
      const makeCall = () =>
          unifetch(params.url.concat(query), {
            method: params.method,
            headers,
            body: JSON.stringify(params.data),
          }),
  
        func = makeCall;
  
      let resp,
        result = {};
  
      try {
        resp = await func();
  
        if (!(params.isJSON == undefined ? true : params.isJSON)) {
          return resp.ok as any;
        }
  
        result = await resp.json();
      } catch (e) {
        console.error(e);
        throw result;
      }
  
      if ('code' in result || 'message' in result) {
        throw result;
      }
  
      return result as any;
    }
  }