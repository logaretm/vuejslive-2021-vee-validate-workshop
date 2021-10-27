<template>
  <div>
    <label :for="name">{{ name }}</label>
    <input :id="name" v-model="value" :name="name" :type="type" @blur="handleBlur" />
    <span v-show="meta.touched">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
});

const name = toRef(props, 'name');
const { value, errorMessage, meta, handleBlur } = useField(name);
</script>
