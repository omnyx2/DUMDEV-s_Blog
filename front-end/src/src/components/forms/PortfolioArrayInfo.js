import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validates/validateSignUp'
import jsonData from './portfolioData';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderExpertise = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add EXPERTISE
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((expertise, index) => (	
	<li key={ index }>
		{console.log(expertise)}
        <h4>Expertise #{index + 1}</h4>
        <Field
          name={`${expertise}.title`}
          type="text"
          component={renderField}
          label="Subject"
        />
        <Field
          name={`${expertise}.content`}
          type="text"
          component={renderField}
          label="Explanation"
        />
        <Field
          name={`${expertise}.degree`}
          type="text"
          component={renderField}
          label="Degree"
        />
        <button
          type="button"
          title="Remove Member"
		  onClick={() => fields.remove(index)}
		>Remove</button>
  		</li>
    ))}
  </ul>
)
const renderExperience = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add EXPERIENCE
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((experience, index) => (	
	<li key={ index }>
		{console.log(experience)}
        <h4>Experience #{index + 1}</h4>
        <Field
          name={`${experience}.title`}
          type="text"
          component={renderField}
          label="Subject"
        />
        <Field
          name={`${experience}.content`}
          type="text"
          component={renderField}
          label="Explanation"
        />
        <Field
          name={`${experience}.degree`}
          type="text"
          component={renderField}
          label="Degree"
        />
        <button
          type="button"
          title="Remove Member"
		  onClick={() => fields.remove(index)}
		>Remove</button>
  		</li>
    ))}
  </ul>
)

const renderEducation = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add EDUCATION
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((education, index) => (	
	<li key={ index }>
        <h4>Education #{index + 1}</h4>
        <Field
          name={`${education}.title`}
          type="text"
          component={renderField}
          label="Subject"
        />
        <Field
          name={`${education}.startYear`}
          type="text"
          component={renderField}
          label="Start"
        />
        <Field
          name={`${education}.endYear`}
          type="text"
          component={renderField}
          label="End"
        />
        <Field
          name={`${education}.position`}
          type="text"
          component={renderField}
          label="Subject"
        />
        <Field
          name={`${education}.content`}
          type="text"
          component={renderField}
          label="Explanation"
        />
        <button
          type="button"
          title="Remove Member"
		  onClick={() => fields.remove(index)}
		>Remove</button>
  		</li>
    ))}
  </ul>
)

const renderAwards = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add AWARDS
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((award, index) => (	
	<li key={ index }>
        <h4>Awards #{index + 1}</h4>
        <Field
          name={`${award}.title`}
          type="text"
          component={renderField}
          label="Subject"
        />
        <Field
          name={`${award}.content`}
          type="text"
          component={renderField}
          label="Explanation"
        />
        <button
          type="button"
          title="Remove Member"
		  onClick={() => fields.remove(index)}
		>Remove</button>
  		</li>
    ))}
  </ul>
)


const FieldArraysForm = props => {
  console.log(jsonData.expertise.items);	   
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="expertise" component={renderExpertise} />
      <FieldArray name="experience" component={renderExperience }/>
      <FieldArray name="education" component={renderEducation} />
      <FieldArray name="awards" component={renderAwards} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}
var initVal  = (type) =>{
	switch(type){
			case "EXPERTISE": return jsonData.expertise.items;
			case "EXPERIENCE": return jsonData.experience.items;
			case "EDUCATION": return jsonData.education.items;
			case "AWARDS": return jsonData.awards.items;
			default : return [];		
	}
}
export default reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
  validate,
  initialValues:{
	expertise: initVal("EXPERTISE"),
	experience: initVal("EXPERIENCE"),
	education: initVal("EDUCATION"),
	awards: initVal("AWARDS"),
  }
})(FieldArraysForm);
