import { jest, describe, test, expect } from '@jest/globals';
import Order from '../src/entities/order';
import OrderBusiness from '../src/business/orderBusiness';

describe('Test suite for template method design pattern', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('#OrderBusiness', () => {
    test('Execution Order Business without template method', () => {
      const order = new Order({
        customerId: 1,
        amount: 100.0,
        products: [{ description: 'Lamborghini' }],
      });

      const orderBusiness = new OrderBusiness();
      const isValid = orderBusiness._validateRequiredFields(order)
      expect(isValid).toBeTruthy()

      const result = orderBusiness._create(order)
      expect(result).toBeTruthy()
    });

    test('Execution Order Business with Template method', () => {
      const order = new Order({
        customerId: 1,
        amount: 100.0,
        products: [{ description: 'Lamborghini' }],
      });

      const orderBusiness = new OrderBusiness();
     
      const result = orderBusiness.create(order)
      expect(result).toBeTruthy()
    })
  });
});
