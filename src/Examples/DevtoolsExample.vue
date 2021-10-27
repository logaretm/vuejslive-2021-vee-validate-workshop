<template>
  <div>
    <h3>Open VueDevtools and inspect the form using the vee-validate inspector</h3>
    <InputField name="name" />
    <InputField name="email" />
    <InputField name="password" type="password" />

    <button @click="onSubmit">Submit</button>
  </div>
</template>

<script setup lang="ts">
/**
 * Open VueDevtools and inspect the form using the vee-validate inspector
 */
import InputField from '../components/InputField.vue';
import { useForm } from 'vee-validate';
import { string, object } from 'yup';

const schema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(6).required(),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2));
});
</script>
