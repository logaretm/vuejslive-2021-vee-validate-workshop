<template>
  <div>
    <FieldArray name="urls" v-slot="{ push, remove, fields }">
      <!-- Field Key is auto generated for you! -->
      <div class="flex" v-for="(field, idx) in fields" :key="field.key">
        <InputField :name="`urls[${idx}]`" />

        <!-- removes item by index from the fields array -->
        <button @click="remove(idx)">x</button>
      </div>

      <!-- Adds a new item to the fields array -->
      <button @click="push('')">+</button>
    </FieldArray>

    <pre>{{ values }}</pre>

    <button @click="onSubmit">Submit</button>
  </div>
</template>

<script setup lang="ts">
import InputField from '../components/InputField.vue';
import { useForm, FieldArray } from 'vee-validate';
import { string, object, array } from 'yup';

// array validation by yup!
const schema = object({
  urls: array().of(string().url().required()),
});

const { handleSubmit, values } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2));
});
</script>

<style lang="postcss" scoped>
.flex {
  display: flex;
  align-items: center;
}
</style>
