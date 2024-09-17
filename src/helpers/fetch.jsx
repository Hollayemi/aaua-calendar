const server = "https://aaua-calendar-backend.onrender.com/api"
export const fetchNoToken = (endpoint, data, method = "GET") => {
  const url = `${server}/${endpoint}`; // localhost:5000/api/events

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};
export const fetchWithToken = (endpoint, data, method = "GET") => {
  const url = `${server}/${endpoint}`; // events
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        "x-token": token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};
