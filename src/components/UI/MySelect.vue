<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Choose from List</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
    {{option.name}}
    </option>
  </select>
</template>
<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
      changeOption(e){
          // console.log(e)
          this.$emit('update: modelValue', e.target.value);
      }
  }
}
</script>
<style scoped>
select{
    height: 30px;
    align-self: center;
}
</style>