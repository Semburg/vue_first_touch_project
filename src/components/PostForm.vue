<template >
  <div>
    <form @submit.prevent>
      <h3>Form to add the posts</h3>
      <!-- 2 different ways binding - first with method -->
      <my-input
        v-bind:value="post.title"
        @input="post.title = $event.target.value"
        type="text"
        placeholder="Title"
      />
      <!-- direct binding with V-Model - see difference - LEARN!  -->
      <my-input
        v-model="post.body"
        type="text"
        placeholder="Description"
      />
      <my-button 
      
      style="align-self:flex-end; "
      @click="createPost"
      
      >
      Create Post
      </my-button>
    </form>
  </div>
</template>
<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {
    MyButton,
  },

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

      this.$emit("create", this.post, "second param", "3 param");
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>