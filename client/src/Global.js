export const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }

  export const addResource = (collection, addItem) => {
    return [...collection, addItem];
  }