import Ember from 'ember';

const {
	A,
  get,
  isEmpty,
  isPresent,
  inject: { service },
  set,
  String: { camelize, capitalize }
} = Ember;

export default Ember.Route.extend({
  queryParams: {
    resource: {
      refreshModel: true
    }
  },

  notifications: service('notification-messages'),

  model(params) {
    set(this, 'params', params);

    const resource = get((params || {}), 'resource');
    if (resource) {
      return this.store.query(capitalize(camelize(resource)), {})
        .then((resources => {
          return resources.map((r) => {
            return r.toJSON();
          });
        }))
				.catch(() => {
					return A();
				});
    }

    return null;
  },

  setupController(controller, model) {
    this._super(...arguments);

    set(controller, 'empty', isEmpty(model));

    if (isEmpty(model)) {
      const params = get(this, 'params') || {},
        resource = get(params, 'resource');

      if (isPresent(resource)) {
        get(this, 'notifications').warning('No matching results could be retrieved!', {
          autoClear: true
        });
      }
    }
  },

  actions: {
    capability() {
      this.transitionTo('application', {
        queryParams: {
          resource: 'CapabilityStatement'
        }
      });
    }
  }
});
