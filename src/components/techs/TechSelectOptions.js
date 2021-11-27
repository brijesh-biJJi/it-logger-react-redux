import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);
  return <div></div>;
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
