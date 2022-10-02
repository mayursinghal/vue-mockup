import axios from 'axios'
export default {
    async loadContent(context) {
        let content = []
        const response = await axios.get("https://api.publicapis.org/entries")
            
                content = await response.data.entries
                context.commit('setData',content)
        
    }
}