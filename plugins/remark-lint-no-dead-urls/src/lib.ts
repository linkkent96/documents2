import got, {type Method} from 'got';

export async function fetch(url: string, method: Method, options = {}) {
  const {statusCode} = await got(url, {
    ...options,
    method,
    methodRewriting: true,
  });
  return statusCode;
}
