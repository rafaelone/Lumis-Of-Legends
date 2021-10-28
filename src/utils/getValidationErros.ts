import {ValidationError} from 'yup';

interface Errors {
  [key: string]: string;
}

export function getValidationErros(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(({path, message}) => {
    if (path) {
      validationErrors[path] = message;
    }
  });

  return validationErrors;
}
