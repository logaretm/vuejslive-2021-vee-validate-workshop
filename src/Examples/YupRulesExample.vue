<template>
  <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit" :validation-schema="schema">
    <div class="field">
      <Field name="name" />
      <ErrorMessage name="name" />
    </div>

    <div class="field">
      <Field name="email" type="email" />
      <ErrorMessage name="email" />
    </div>

    <div class="field">
      <Field name="password" type="password" />
      <ErrorMessage name="password" />
    </div>

    <div class="field">
      <Field name="confirmPassword" type="password" />
      <ErrorMessage name="confirmPassword" />
    </div>

    <button>Submit</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { string, object, ref as fieldRef } from 'yup';

// array validation by yup!
const schema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(6).required(),
  confirmPassword: string()
    .oneOf([fieldRef('password')], 'Passwords do not match')
    .required(),
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
