type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'UPDATE';

interface HttpHeaders {
  'Content-Type': string;
  [key: string]: string;
}
interface RequestOptions {
  method: HttpMethod;
  params?: Record<string, any>;
  headers: HttpHeaders;
  body?: string;
  signal?: AbortSignal;
}

console.info(process.env.NODE_ENV);
const serviceUrl = 'https://freuders-web-api-test-3.azurewebsites.net/api/';

const apiRequest = async (url: string, method: HttpMethod, data?: unknown, headers?: HttpHeaders, withJson: boolean = true, signal?: AbortSignal) => {
  const currentURL = /^https?:\/\//i.test(url) ? url : serviceUrl + url;
  const options: RequestOptions = {
    method: method,
    headers: headers || {
      'Content-Type': 'application/json'
    }
  };
  if (data && method !== 'GET') {
    options.body = withJson ? JSON.stringify(data) : (data as any);
  }

  if (data && method === 'GET') {
    options.params = data;
  }

  if (signal) {
    options.signal = signal;
  }

  try {
    const response = await fetch(currentURL, options);
    if (!response.ok) {
      const err = await response.json();
      console.error(`ERROR: status --> ${response.status}`);
      console.error('ERROR: -->', err);
    }
    return await response.json();
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.info('Fetch aborted');
    } else {
      console.error('Error:', error);
      throw error;
    }
  }
};
const getRequest = (url: string, data?: any, headers?: HttpHeaders, withJson?: boolean, signal?: AbortSignal) => apiRequest(url, 'GET', data, headers, withJson, signal);

const postRequest = (url: string, data: any, headers?: HttpHeaders, withJson?: boolean, signal?: AbortSignal) => apiRequest(url, 'POST', data, headers, withJson, signal);

const putRequest = (url: string, data: any, headers?: HttpHeaders, withJson?: boolean, signal?: AbortSignal) => apiRequest(url, 'PUT', data, headers, withJson, signal);

const deleteRequest = (url: string, headers?: HttpHeaders, withJson?: boolean, signal?: AbortSignal) => apiRequest(url, 'DELETE', {}, headers, withJson, signal);

const updateRequest = (url: string, data: any, headers?: HttpHeaders, withJson?: boolean, signal?: AbortSignal) => apiRequest(url, 'UPDATE', data, headers, withJson, signal);


export default apiRequest;

export {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
  updateRequest
};
