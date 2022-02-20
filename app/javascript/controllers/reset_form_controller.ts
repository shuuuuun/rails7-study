import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // @ts-ignore
  element: HTMLFormElement // FIXME: ts(2610). rel: https://stackoverflow.com/q/68477998
  // declare element: HTMLFormElement
  // get element(): HTMLFormElement

  initialize() {
    console.log("initialize!")
  }
  connect() {
    console.log("connect!")
  }
  disconnect() {
    console.log("disconnect!")
  }

  reset() {
    console.log("reset")
    this.element.reset()
  }
}
