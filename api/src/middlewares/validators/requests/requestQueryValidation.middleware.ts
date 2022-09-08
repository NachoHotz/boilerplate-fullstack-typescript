/* eslint-disable import/prefer-default-export */
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import * as express from 'express';
import BadRequestException from '../../../exceptions/BadRequestException';

export function requestQueryValidation<T>(type: any): express.RequestHandler {
  return (req, _res, next) => {
    validate(plainToInstance(type, req.query)).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors
            .map((error: ValidationError) =>
              Object.values(error.constraints as { [type: string]: string }),
            )
            .join(', ');
          next(
            new BadRequestException(
              message.split(', ').map((err) => err.trim()),
            ),
          );
        } else {
          next();
        }
      },
    );
  };
}