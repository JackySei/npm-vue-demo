import JkDemo from "./src/jk-demo.vue";

JkDemo.install = (App) => {
  App.component("JkDemo", JkDemo);
};

export default JkDemo;
