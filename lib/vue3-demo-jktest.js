import { openBlock as n, createElementBlock as s, toDisplayString as c } from "vue";
const e = {
  __name: "jk-demo",
  props: {
    msg: {
      type: String,
      default: "没有内容"
    }
  },
  setup(t) {
    const o = t;
    return (l, p) => (n(), s("div", null, c(o.msg), 1));
  }
};
e.install = (t) => {
  t.component("JkDemo", e);
};
const m = (t) => {
  t.component("JkDemo", e);
}, a = {
  install: m
};
export {
  e as JkDemo,
  a as default
};
