
import { toJson } from 'ember-fhir-example/helpers/to-json';
import { module, test } from 'qunit';

module('Unit | Helper | to json');

test('it works', function(assert) {
  let result = toJson([42]);
  assert.ok(result);
});

