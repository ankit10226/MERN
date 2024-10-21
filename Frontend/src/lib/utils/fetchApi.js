const fetchApi = async (url, options = {}) => { 
    const headers = {
      "Content-Type": "application/json",
      ...options.headers, 
    };
  
    const fetchOptions = {
      ...options,
      headers, 
      body: options.body ? JSON.stringify(options.body) : undefined,
    };
  
  
    const response = await fetch(url, fetchOptions);
    return response; 
  };

  export default fetchApi;
  