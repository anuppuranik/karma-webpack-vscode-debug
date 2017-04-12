
interface IMathService {
  sum(addendum: number, operand: number): number;
}

class MathService implements IMathService {
 
  sum(addendum: number, operand: number): number{
    return addendum + operand;
  }
}

export const mathService = new MathService();