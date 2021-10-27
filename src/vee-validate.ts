import { defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import messages from '@vee-validate/i18n/dist/locale/en.json';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
  generateMessage: localize('en', messages),
});
