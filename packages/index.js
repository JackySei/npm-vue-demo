import JkDemo from "./JkDemo";

//按需引入
export { JkDemo };

const components = [JkDemo];

const install = (App) => {
  App.component("JkDemo", JkDemo);
};

export default {
  install,
};
