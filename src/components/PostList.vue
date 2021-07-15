<template>
  <div>
    <div>
      <h2>With iteration of array</h2>
    </div>

    <div class="post" v-for="post in posts">
      <div><strong>Topic</strong> {{ post.title }}</div>
      <div><strong>Description</strong> {{ post.body }}</div>
    </div>
  </div>
</template>


<script>
export default {
    props: {
        posts:{
            type: Array,
            required: true,
        }
    }
};
</script>


<style>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 14px;
}
</style>