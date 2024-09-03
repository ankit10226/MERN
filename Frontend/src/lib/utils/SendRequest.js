const sendRequest = async (
    url,
    method = "GET",
    headers = {},
    body = null,
    callback = () => {}
  ) => {
    let data;
    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      };
  
      const response = await fetch(url, options);
  
      data = await response.json();
  
      if (!response.ok) {
        console.error("Response error:", data);
      } 
    } catch (error) {
      console.error("Request failed:", error);
    } finally { 
      if (typeof callback === "function") {
        callback();
      }
    }
    return data;
  };
  
  export default sendRequest;
  