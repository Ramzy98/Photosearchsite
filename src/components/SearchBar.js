import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui category search">
        <form className="ui segment" onSubmit={this.onFormSubmit}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Seach for anything..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
