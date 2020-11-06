import template from "lodash.template";
import html from "./index.html";
import "../header/index.html";

const templateRenderer = template(html);


class Main {
  constructor() {
    this.main = document.querySelector("#content");
    this.header = document.querySelector("div.container");
  }

  render() {
    const layout = templateRenderer(this.main);

    const container = document.createElement("div");
    container.innerHTML = layout;
    this.header.appendChild(container.firstChild);
  }
}

export default Main;