import axios from 'axios'

const api = axios.create({
  baseURL: 'https://swayam-backend-yh2p.onrender.com/api',
  timeout: 8000,
})

export const fetchProfile  = () => api.get('/profile/').then(r => r.data)
export const fetchProjects = () => api.get('/projects/').then(r => r.data)
export const fetchSkills   = () => api.get('/skills/').then(r => r.data)
export const sendContact   = (data) => api.post('/contact/', data).then(r => r.data)

export default api