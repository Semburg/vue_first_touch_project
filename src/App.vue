<template>
  <div>
    <post-form @create="createPost" />

    <post-list :posts="posts" />

    <!-- getting the data from data array 'post' -- > moved to components-->

    <!-- <div>
    <h2>With iteration of array</h2>
  </div>

  <div class="post" v-for="post in posts">
    <div><strong>Topic</strong> {{ post.title }}</div>
    <div><strong>Description</strong> {{ post.body }}</div>
  </div> -->

    <!-- START VIEWs -->
    <!-- <button @click="addLike" >Like</button>
        <button v-on:click="addDislike">Dislike</button>

        <div>Number of likes: <strong>{{ likes }} </strong> </div>
        <div>Number of dislikes: <strong>{{ dislikes }} </strong> </div> -->
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JavaScript", body: "Some article about javascript." },
        { id: 2, title: "React", body: "Some article about React." },
        { id: 3, title: "Python", body: "Some article about Python." },
      ],
    };
  },

  methods: {
    createPost(post, second, third) {

        this.posts.push(post)
      // tests for get other attributes - see child!
      console.log(post);
      console.log(second);

      console.log(third);
    },

    inputTitle(e) {
      this.title = e.target.value;
    },

    //  direct creation - see the input options
    // inputBody(e) {
    //     this.body = e.target.value
    // },

    //  methods for first expo of reactive vue idea
    // addLike() {
    //   this.likes += 1;
    // },
    // addDislike() {
    //   this.dislikes += 1;
    // },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

h2 {
  margin-top: 20px;
}
</style>