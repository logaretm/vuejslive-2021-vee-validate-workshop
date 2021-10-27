<template>
  <form @submit="onSubmit" novalidate>
    <InputField name="name" />
    <InputField name="email" type="email" />
    <InputField name="password" type="password" />
    <InputField name="confirmPassword" type="password" />

    <button>Submit</button>

    <!-- Disable when the form is invalid -->
    <!-- <button :disabled="!meta.valid">Submit</button> -->

    <!-- Disable when the form is unchanged -->
    <!-- <button :disabled="!meta.dirty">Submit</button> -->

    <!-- Disable when the form is submitting -->
    <!-- <button :disabled="isSubmitting">Submit</button> -->
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { string, object, ref as fieldRef } from 'yup';
// Import a custom component that uses `useField`
import InputField from '../components/InputField.vue';

// array validation by yup!
const schema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(6).required(),
  confirmPassword: string()
    .oneOf([fieldRef('password')], 'Passwords do not match')
    .required(),
});

// you can access everything in the form like values, meta, etc...
const { handleSubmit, meta, isSubmitting } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit(
  (values) => {
    alert(JSON.stringify(values, null, 2));
  },
  // invalid submission handler
  ({ errors }) => {
    // scroll to the first field on invalid submission by the user
    const field = Object.keys(errors)[0];
    const fieldEl = document.querySelector(`input[name="${field}"]`);

    fieldEl.scrollIntoView({
      behavior: 'smooth',
    });
  }
);
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
