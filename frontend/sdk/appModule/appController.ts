/// Auto-generated file (nest-sdk-generator)
/// Please do not edit this file - re-generate the SDK using the generator instead.
/// Generated on: Thu, 01 Dec 2022 16:57:29 GMT
///
/// Parent module: appModule
/// Controller: "appController" registered as "appController" (1 routes)

import { request } from '../central';
import type { Stripe } from 'stripe';

export default {
  // GET @
  getHello(
    params: {},
    body: {},
    query: { test: string },
  ): Promise<Stripe.Customer> {
    return request('GET', ``, body, query) as any;
  },
};
