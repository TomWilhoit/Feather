export const fetchData = async url => {
  try {
    const response = await fetch(url)
    if (response.ok){
      return await response.json()
    } 
  } catch(error) {
    throw Error(error.message)
  }
};
