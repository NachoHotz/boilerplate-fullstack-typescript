import { TokenType } from '../config';
import HttpException from './HttpException';

export class InvalidTokenException extends HttpException {
  constructor(tokenType: TokenType, message = `Invalid ${tokenType} token`) {
    super(401, message);
  }
}
