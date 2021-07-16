<template>
  <div>
    <div class="post">
      <div>
        <div><strong>Topic</strong> {{ post.title }}</div>
        <div><strong>Description</strong> {{ post.body }}</div>
      </div>

      <div class="post__btns">
        <my-button class="btn2">Delete</my-button>
      </div>
    </div>
  </div>
</template>
<script>
// !! without direct  import of my-button because we had set/up it for UI elements - see /UI, main js... read docs
export default {
 
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn2{
    margin: 0;
}
</style>