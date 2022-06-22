export interface Options {
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
}

export default class Typewriter {
  element: HTMLElement;
  shouldLoop: boolean;
  typingSpeed: number;
  deletingSpeed: number;
  constructor(element: HTMLElement, options: Options) {
    const parent = element;
    const newElement = document.createElement("span");
    parent.appendChild(newElement);
    this.element = newElement;
    this.shouldLoop = options.loop ?? true;
    this.typingSpeed = options.typingSpeed ?? 200;
    this.deletingSpeed = options.deletingSpeed ?? 200;

    console.log(this.element);
    console.log(this.shouldLoop);
    console.log(this.typingSpeed);
    console.log(this.deletingSpeed);
  }
}
