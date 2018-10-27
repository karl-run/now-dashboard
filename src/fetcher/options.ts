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

const GET_OPTIONS = createOptions('GET')
const POST_OPTIONS = createOptions('POST')

export { GET_OPTIONS, POST_OPTIONS }
