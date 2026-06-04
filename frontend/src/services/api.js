import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 8000,
})

export const fetchProfile  = () => api.get('/profile/').then(r => r.data)
export const fetchProjects = () => api.get('/projects/').then(r => r.data)
export const fetchFeatured = () => api.get('/projects/featured').then(r => r.data)
export const fetchProject  = (id) => api.get(`/projects/${id}`).then(r => r.data)
export const fetchSkills   = () => api.get('/skills/').then(r => r.data)
export const sendContact   = (data) => api.post('/contact/', data).then(r => r.data)

export default api
