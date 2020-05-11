import axios from 'axios'

const covid_url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const response = await axios.get(covid_url)
    return response
  } catch (error) {
    return error
  }
}
