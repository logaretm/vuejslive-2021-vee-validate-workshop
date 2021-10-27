<template>
  <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit">
    <div class="field">
      <Field name="name" rules="required" />
      <ErrorMessage name="name" />
    </div>

    <div class="field">
      <Field name="email" type="email" rules="required|email" />
      <ErrorMessage name="email" />
    </div>

    <div class="field">
      <Field name="password" type="password" rules="required|min:6" />
      <ErrorMessage name="password" />
    </div>

    <div class="field">
      <Field name="confirmPassword" type="password" rules="required|confirmed:@password" />
      <ErrorMessage name="confirmPassword" />
    </div>

    <button>Submit</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min, confirmed } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import messages from '@vee-validate/i18n/dist/locale/en.json';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('confirmed', confirmed);

configure({
  generateMessage: localize('en', messages),
});

function onInvalidSubmit({ errors }) {
  // scroll to the first field on invalid submission by the user
  const field = Object.keys(errors)[0];
  const fieldEl = document.querySelector(`input[name="${field}"]`);

  fieldEl.scrollIntoView({
    behavior: 'smooth',
  });
}

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}
</script>

<style lang="postcss" scoped>
.flex {
  display: flex;
  align-items: center;
}

/* .field {
  height: 500px;
} */
</style>
