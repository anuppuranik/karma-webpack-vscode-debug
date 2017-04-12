
import { mathService } from '../src/MathService';

describe('MathService', () => {

  describe('sum', () => {
    it('should return a sum of two numbers', () => {
      let a = 4;
      let b = 5;
      expect(mathService.sum(a, b)).toBe(9);
    });
  });
});