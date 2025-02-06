// SurveyFormReview shows users their from inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
//up one directory that takes us to components ../
//up one more, that takes us to src
//into actions
import * as actions from '../../actions/index';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  //random name
  // we will map with lodash over this array(formFields) and then, for
  //every field we're going to return a little bit of jsx

  //(formFields, fields was renamed to ES6 estructuring, since we only need)
  //name and label properties we will ask directly for them
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
        Back
      </button>
      {/* () => submitSurvey(formValues) so it doesnt execute right away
      and waits for confirmation */}
      <button onClick={() => submitSurvey(formValues, history)} className="green white-text btn-flat right">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
};



export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));