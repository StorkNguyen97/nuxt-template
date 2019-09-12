import { message } from 'ant-design-vue'

export default function({ $axios, redirect }) {
  $axios.setHeader('Content-Type', 'application/json', ['post', 'put'])
  $axios.setToken(
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5OTk5OTk5IiwiQVVUSE9SSVRJRVMiOiJST0xFX0hRX1NUQUZGIiwiZXhwIjoxNTY4NDQ5MzU1fQ.LdvxB2f4s3GicyrLXCpQAN_gY4QOFUW8Ndkt_IZHKhc'
  )
  localStorage.setItem(
    'token',
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5OTk5OTk5IiwiQVVUSE9SSVRJRVMiOiJST0xFX0hRX1NUQUZGIiwiZXhwIjoxNTY4NDQ5MzU1fQ.LdvxB2f4s3GicyrLXCpQAN_gY4QOFUW8Ndkt_IZHKhc'
  )

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      message.error('Unauthentication. Please login first!')
      redirect('/login')
    } else {
      message.error('Error. Please try again!')
    }
  })
}
