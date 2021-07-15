<template >
  <div>
    <form @submit.prevent>
      <h3>Form to add the posts</h3>
      <!-- 2 different ways binding - first with method -->
      <input
        v-bind:value="post.title"
        @input="post.title = $event.target.value"
        class="input"
        type="text"
        placeholder="Title"
      />
      <!-- direct binding with V-Model - see difference - LEARN!  -->
      <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Description"
      />
      <button class="btn" @click="createPost">Create Post</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();

    //below will not work, because this is a child of app. using create will solve the issue
    //   this.posts.push(newPost);

        this.$emit('create', this.post, 'second param', '3 param')
        this.post = {
            title: "",
            body: "",
        }
    }
  }
}
</script>
<style >
form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px;
  margin-top: 10px;
}
.btn {
  margin-top: 10px;
  padding: 10px;
  align-self: flex-end;
  background: none;
  border: 1px solid black;
  color: teal;
  border-radius: 3px;
}
</style>