import Ember from 'ember';
import moment from 'moment';

const {
	A,
  get,
  isEmpty,
  isPresent,
  inject: { service },
  set,
  String: { camelize, capitalize, dasherize }
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
    set(this, 'start', moment().utc());
    if (resource) {
      return this.store.query(capitalize(camelize(resource)), {
        _count: 20
      })
        .then((resources) => {
          set(this, 'end', moment().utc());
          return resources;
        })
				.catch(() => {
					return A();
				});
    }

    return null;
  },

  setupController(controller, model) {
    this._super(...arguments);

    set(controller, 'empty', isEmpty(model));

    const params = get(this, 'params') || {},
      resource = get(params, 'resource');

    if (isEmpty(model)) {
      if (isPresent(resource)) {
        get(this, 'notifications').warning('No matching results could be retrieved!', {
          autoClear: true
        });
      }
    }

    const start = get(this, 'start'),
      end = get(this, 'end'),
      diff = end.diff(start);
    set(controller, 'elapsed', diff < 1000 ? `in ${diff}ms` : end.from(start));
    set(controller, 'code', `
      routes/${dasherize(resource)}.js

      ...
      model() {
        return this.store.query(${resource}, {
          _count: 20
        });
      }
      ...
    `);
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
