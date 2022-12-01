import { Controller, Get, Query } from '@nestjs/common';
import { Stripe } from 'stripe';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Query('test') test: string): Promise<Stripe.Customer> {
    return (<any>{ test: 1 }) as Stripe.Customer;
  }
}
