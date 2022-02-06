import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  outputTarget: Element
  nameTarget: HTMLInputElement

  connect() {
    console.log("Hello World!")
    // this.element.textContent = "Hello World!"
  }

  greet() {
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`
  }
}
