const createOptions = (type: 'GET' | 'POST') => ({
  method: 'GET',
  contentType: 'application/json',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_NOW_TOKEN}`,
  },
})

const GET_OPTIONS = createOptions('GET')
const POST_OPTIONS = createOptions('POST')

export { GET_OPTIONS, POST_OPTIONS }
