import React, { Component } from "react";
import {
  Field,
  Label,
  Control,
  SelectControlled,
} from "react-bulma-components";

class PlatformSelector extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Field>
        <Label>Subject</Label>
        <Control>
          <SelectControlled>
            <option>PC</option>
            <option>Playstation</option>
          </SelectControlled>
        </Control>
      </Field>
    );
  }
}

export default PlatformSelector;
