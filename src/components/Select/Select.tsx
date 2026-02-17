import { Item, Picker } from "@adobe/react-spectrum";
import type { JSX } from "react";

const Select = (): JSX.Element => {
  return (
    <Picker label="Favorite Animal">
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="kangaroo">Kangaroo</Item>
    </Picker>
  );
};

export default Select;
