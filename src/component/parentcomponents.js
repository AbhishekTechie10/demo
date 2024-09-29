import { ChildComponents } from "./Childcomponent.js";

export const ParentComponents = () => {
  const greetParent = () => {
    alert("Hello parent !!");
  };

  return <ChildComponents greetHandler={greetParent} />;
};
