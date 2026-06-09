import axios from 'axios'

const API_URL = "https://avdbsymlyxvtmiexlcqk.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2ZGJzeW1seXh2dG1pZXhsY3FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDQ5MTEsImV4cCI6MjA5NjUyMDkxMX0.8SlmCX33cO_OLNQE40urUZJhGyj6LTUTeYQWSHNukrA"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}

