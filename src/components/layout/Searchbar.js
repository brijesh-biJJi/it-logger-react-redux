import React, { useRef } from "react";
import { searchLogs } from "../../actions/logActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Searchbar = ({ searchLogs }) => {
  const text = useRef("");

  const onSearch = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs..."
              ref={text}
              onChange={onSearch}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

Searchbar.propType = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(Searchbar);
