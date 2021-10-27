<template>
  <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit">
    <div class="field">
      <Field name="email" type="email" :rules="validateEmail" />
      <ErrorMessage name="email" />
    </div>

    <div class="field">
      <Field name="password" type="password" :rules="validatePassword" />
      <ErrorMessage name="password" />
    </div>

    <button>Submit</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import isEmail from 'validator/es/lib/isEmail';

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

function validateEmail(value) {
  if (!value || !value.length) {
    return 'This field is required';
  }

  if (!isEmail(value)) {
    return 'This field must be a valid email';
  }

  return true;
}

function validatePassword(value) {
  if (!value || !value.length) {
    return 'This field is required';
  }

  if (value.length < 6) {
    return 'This field must be at least 6 characters';
  }

  return true;
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
