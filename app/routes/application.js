import Ember from 'ember';

const { get, set } = Ember;

const resources = [
  'Account',
  'ActivityDefinition',
  'AllergyIntolerance',
  'AdverseEvent',
  'Appointment',
  'AppointmentResponse',
  'AuditEvent',
  'Basic',
  'Binary',
  'BodySite',
  'Bundle',
  'CapabilityStatement',
  'CarePlan',
  'CareTeam',
  'ChargeItem',
  'Claim',
  'ClaimResponse',
  'ClinicalImpression',
  'CodeSystem',
  'Communication',
  'CommunicationRequest',
  'CompartmentDefinition',
  'Composition',
  'ConceptMap',
  'Condition',
  'Consent',
  'Contract',
  'Coverage',
  'DataElement',
  'DetectedIssue',
  'Device',
  'DeviceComponent',
  'DeviceMetric',
  'DeviceRequest',
  'DeviceUseStatement',
  'DiagnosticReport',
  'DocumentManifest',
  'DocumentReference',
  'EligibilityRequest',
  'EligibilityResponse',
  'Encounter',
  'Endpoint',
  'EnrollmentRequest',
  'EnrollmentResponse',
  'EpisodeOfCare',
  'ExpansionProfile',
  'ExplanationOfBenefit',
  'FamilyMemberHistory',
  'Flag',
  'Goal',
  'GraphDefinition',
  'Group',
  'GuidanceResponse',
  'HealthcareService',
  'ImagingManifest',
  'ImagingStudy',
  'Immunization',
  'ImmunizationRecommendation',
  'ImplementationGuide',
  'Library',
  'Linkage',
  'List',
  'Location',
  'Measure',
  'MeasureReport',
  'Media',
  'Medication',
  'MedicationAdministration',
  'MedicationDispense',
  'MedicationRequest',
  'MedicationStatement',
  'MessageDefinition',
  'MessageHeader',
  'NamingSystem',
  'NutritionOrder',
  'Observation',
  'OperationDefinition',
  'OperationOutcome',
  'Organization',
  'Parameters',
  'Patient',
  'PaymentNotice',
  'PaymentReconciliation',
  'Person',
  'PlanDefinition',
  'Practitioner',
  'PractitionerRole',
  'Procedure',
  'ProcedureRequest',
  'ProcessRequest',
  'ProcessResponse',
  'Provenance',
  'Questionnaire',
  'QuestionnaireResponse',
  'ReferralRequest',
  'RelatedPerson',
  'RequestGroup',
  'ResearchStudy',
  'ResearchSubject',
  'RiskAssessment',
  'Schedule',
  'SearchParameter',
  'Sequence',
  'ServiceDefinition',
  'Slot',
  'Specimen',
  'StructureDefinition',
  'StructureMap',
  'Subscription',
  'Substance',
  'SupplyDelivery',
  'SupplyRequest',
  'Task',
  'TestScript',
  'TestReport',
  'ValueSet',
  'VisionPrescription'
];

export default Ember.Route.extend({
  setupController(controller) {
    this._super(...arguments);
    set(controller, 'resources', resources);
  },

  actions: {
    filter() {
      const filter = get(this.controller, 'filter');
      if (get(filter, 'length') >= 3) {
        set(this.controller, 'resources', resources.filter(r => r.toLowerCase().startsWith(filter.toLowerCase())));
      } else {
        set(this.controller, 'resources', resources);
      }
    }
  }
});
