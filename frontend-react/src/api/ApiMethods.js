import {backendExpress} from "./urls";


export const getItems = (url, search, abortController) => async () => {
    try {
      const response = await fetch(
        `${backendExpress}${url}?q=${search}`,
        {
          signal: abortController.signal,
          method: 'GET',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await response.json()
      return data
    } catch (err) {
      if (err.name !== 'AbortError') {
        throw err
      }
    }
};

export const getItemDetail = (url, itemId, abortController) => async () => {
    try {
        const response = await fetch(
          `${backendExpress}${url}/${itemId}`,
          {
            signal: abortController.signal,
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        const data = await response.json()
        return data
      } catch (err) {
        if (err.name !== 'AbortError') {
          throw err
        }
      }
}
