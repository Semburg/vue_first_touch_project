import { createApp } from 'vue'
import App from './App'

// creating default components - no need to import in the components further
import components from '@/components/UI'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});


app.mount('#app')
