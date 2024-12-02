import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

async function prepareApp() {
	const { worker } = await import('./mocks/browser')
	return worker.start()
}

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

prepareApp().then(() => {
	app.mount('#app')
})
