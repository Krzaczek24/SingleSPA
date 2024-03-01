import { registerApplication, start } from "single-spa"
import { constructApplications, constructRoutes, constructLayoutEngine } from "single-spa-layout"
import microfrontendLayout from "./layout.html"

const routes = constructRoutes(microfrontendLayout)
const applications = constructApplications({
    routes,
    loadApp({ name }) {
        return System.import(name)
    }
})
const layoutEngine = constructLayoutEngine({ routes, applications })

applications.forEach(x => {
    console.log(x)
    registerApplication(x)
})
layoutEngine.activate()
start()
