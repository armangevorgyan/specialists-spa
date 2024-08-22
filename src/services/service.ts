type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'UPDATE';

interface RequestOptions {
  method: HttpMethod;
  params?: Record<string, any>;
  headers: {
    'Content-Type': string;
  };
  body?: string;
  signal?: AbortSignal;
}

console.info(process.env.NODE_ENV);
const serviceUrl = 'https://freuders-web-api-test-3.azurewebsites.net/api/';

const apiRequest = async (url: string, method: HttpMethod, data?: any, headers?: any, withJson: boolean = true, signal?: AbortSignal) => {
  const currentURL = /^https?:\/\//i.test(url) ? url : serviceUrl + url;
  const options: RequestOptions = {
    method: method,
    headers: headers || {
      'Content-Type': 'application/json'
      // Add any additional headers as needed
    }
  };
  if (data && method !== 'GET') {
    options.body = withJson ? JSON.stringify(data) : data;
    // options.body = data;
  }
  if (data && method === 'GET') {
    options.params = data;
    // options.body = data;
  }
  if (signal) {
    options.signal = signal;
  }
  try {
    console.log(options);
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
const getRequest = (url: string, data?: any, headers?: any, withJson?: boolean, signal?: AbortSignal) => apiRequest(url, 'GET', data, headers, withJson, signal);

const postRequest = (url: string, data: any, headers?: any, withJson?: boolean, signal?: AbortSignal) => apiRequest(url, 'POST', data, headers, withJson, signal);

const putRequest = (url: string, data: any, headers?: any, withJson?: boolean, signal?: AbortSignal) => apiRequest(url, 'PUT', data, headers, withJson, signal);

const deleteRequest = (url: string, headers?: any, withJson?: boolean, signal?: AbortSignal) => apiRequest(url, 'DELETE', {}, headers, withJson, signal);

const updateRequest = (url: string, data: any, headers?: any, withJson?: boolean, signal?: AbortSignal) => apiRequest(url, 'UPDATE', data, headers, withJson, signal);


export default apiRequest;

export {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
  updateRequest
};
