import Ember from 'ember';

export const toJson = ([model]) => {
  return JSON.stringify(model, null, 2);
};

export default Ember.Helper.helper(toJson);
