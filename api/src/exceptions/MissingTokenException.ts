import { TokenType } from '../config';
import HttpException from './HttpException';

export class MissingTokenException extends HttpException {
  constructor(tokenType: TokenType, message = `No ${tokenType} token provided`) {
    super(400, message);
  }
}
