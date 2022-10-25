export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status, 10)
    if (code === 400) {
      redirect('/400')
    }
    if (code === 500) {
      redirect('/sorry')
    }
  })
  $axios.onRequest((config) => {
    console.log(`Making request to ${config.url}`)
  })
}
