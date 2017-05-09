import Ember from 'ember';

export const toJson = ([model]) => {
  const resources = model.map((resource) => {
    return resource.toJSON();
  });
  return JSON.stringify(resources, null, 2);
};

export default Ember.Helper.helper(toJson);
