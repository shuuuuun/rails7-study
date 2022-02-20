import { Application } from "@hotwired/stimulus"
import { NODE_ENV } from "env"

// console.log(`NODE_ENV: ${NODE_ENV}`)

const application = Application.start()

// Configure Stimulus development experience
application.debug = NODE_ENV === "development"
window.Stimulus   = application

export { application }
