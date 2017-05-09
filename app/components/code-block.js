import Ember from 'ember';
import EmberHighlightCode from 'ember-highlight-code/components/ember-highlight-code';

const { get } = Ember;

export default EmberHighlightCode.extend({
  didInsertElement() {
    this._super(...arguments);
  },

  didRender() {
    const that = this,
      code = get(that, 'code') || '',
      spaces = code.replace(/\n/, '').match(/^\s+/g),
      spacesRegExp = new RegExp('^' + spaces, 'gm'),
      formattedCode = code.replace(spacesRegExp, '').replace(/^\s+|\s+$/g, '');

    that.$().html(formattedCode);
    this.didInsertElement();
  }
});
