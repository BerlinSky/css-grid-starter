function onFail(failure) {
  console.log("Failure Info", failure);
}

function onError(error) {
  console.log("Error Info", error);
}

export const getUrl = () => {
  return `http://localhost:3001/users`;
}

export const createRequest = (url, data) => {
  return new Request(url, {
    // method: 'POST',
    method: 'GET',
    body: data,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export async function fetchJsonData(request, onSuccess) {
  try {
    const fetchResult = fetch(request);
    const response = await fetchResult;

    if (response.ok) {
      const jsonData = await response.json();
      onSuccess(jsonData);
    }
    else {
      onFail(response);
    }
  }
  catch (error) {
    onError(error)
  }
}