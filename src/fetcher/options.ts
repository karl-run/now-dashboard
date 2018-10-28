const createOptions = (type: 'GET' | 'POST') => {
  const token =
    process.env.REACT_APP_NOW_TOKEN || localStorage.getItem('now-token')

  return {
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: `bearer ${token}`,
    },
  }
}

const getOptions = () => createOptions('GET')
const postOptions = () => createOptions('POST')

export { getOptions, postOptions }
