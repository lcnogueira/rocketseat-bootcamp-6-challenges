import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TemplateActions } from '../../store/ducks/templates';

import './style.css';

const RightBar = ({ templates, choosen, chooseTemplate }) => (
  <div className="right-container">
    <h2>Choose a map template</h2>
    <form onChange={e => chooseTemplate(e.target.value)}>
      {templates.map(template => (
        <div key={template} className="template">
          <label htmlFor={template}>
            <input
              id={template}
              type="radio"
              value={template}
              name="template"
              defaultChecked={template === choosen}
            />{' '}
            {template}
          </label>
        </div>
      ))}
    </form>
  </div>
);

RightBar.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.string).isRequired,
  choosen: PropTypes.string.isRequired,
  chooseTemplate: PropTypes.func.isRequired,
};

const mapStToProps = ({ templates }) => ({
  templates: templates.available,
  choosen: templates.choosen,
});

const mapDispToProps = dispatch => bindActionCreators(TemplateActions, dispatch);

export default connect(
  mapStToProps,
  mapDispToProps,
)(RightBar);
