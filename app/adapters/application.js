import FhirAdapter from 'ember-fhir/adapters/application';

export default FhirAdapter.extend({
  host: 'http://fhirtest.uhn.ca',
  namespace: 'baseDstu3'
  // host: 'https://demo04.smilecdr.com:8000',
  // namespace: ''
});
