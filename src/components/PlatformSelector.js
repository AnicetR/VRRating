import React from "react";
import Context from "../context";

class PlatformSelector extends React.PureComponent {
    static contextType = Context;
  constructor(){
      super();
      this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event){
      this.context.setPlatforms(event.target.value);
      this.context.reloadGames();
  }

  getOptions(){
      let options = [];
      for(const platform of this.context.basePlatforms){
          options.push(<option value={platform} key={platform}>{this.context.basePlatformsDictionnary.get(platform)}</option>)
      }
      return options;
  }

  render() {
    return (
      <div>
        <select multiple defaultValue={this.context.platforms} onChange={this.handleChange}>
            {this.getOptions()}
        </select> 
      </div>
    );
  }
}

export default PlatformSelector;
