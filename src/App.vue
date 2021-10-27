<template>
  <div>
    <BasicFormExample />
    <!-- <GlobalRulesExample /> -->
    <!-- <YupFormExample /> -->
    <!-- <CompositionExample /> -->
    <!-- <FieldArrayExample /> -->
    <!-- <DevtoolsExample /> -->
  </div>
</template>

<script lang="ts">
import BasicFormExample from './Examples/BasicExample.vue';
import YupFormExample from './Examples/YupRulesExample.vue';
import GlobalRulesExample from './Examples/GlobalRulesExample.vue';
import CompositionExample from './Examples/CompositionExample.vue';
import FieldArrayExample from './Examples/FieldArrayExample.vue';
import DevtoolsExample from './Examples/DevtoolsExample.vue';

export default {
  components: {
    BasicFormExample,
    CompositionExample,
    FieldArrayExample,
    DevtoolsExample,
    YupFormExample,
    GlobalRulesExample,
  },
};
</script>
