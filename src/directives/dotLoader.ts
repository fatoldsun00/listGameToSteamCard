import type { Directive } from "vue";

const vDotLoader: Directive = {
  mounted(el: HTMLElement, binding) {
    //init
    const wrapper = document.createElement("div");
    el.classList.add("containerLoader");
    wrapper.classList.add("loader");
    wrapper.classList.add("dot-bricks");

    Array.from(el.querySelectorAll("*")).forEach((child: HTMLElement): void => {
      child.classList.add("hideWhileLoad");
    });
    el.appendChild(wrapper);
    addRemoveLoader(el, binding.value);
  },

  updated(el, binding, vnode, prevVnode) {
    addRemoveLoader(el, binding.value);
  },
};

function addRemoveLoader(el, state) {
  console.log(el, state);
  if (state) {
    el.classList.add("loading");
  } else {
    el.classList.remove("loading");
  }
}

export default vDotLoader;
