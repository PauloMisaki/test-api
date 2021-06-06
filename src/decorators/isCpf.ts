import { registerDecorator, ValidationOptions } from 'class-validator';
import { isCPF } from 'brazilian-values';

export function isCpf(validationOptions?: ValidationOptions) {
  return function (object, propertyName: string) {
    registerDecorator({
      name: 'isCpf',
      target: object.constructor,
      propertyName: propertyName,
      options: { message: 'Invalid CPF', ...validationOptions },
      validator: {
        validate(value: any) {
          return isCPF(value);
        },
      },
    });
  };
}
