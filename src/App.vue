<template>
  <div>
    <!-- tests API fetch by click
    <my-button @click="fetchPosts">Get posts from API</my-button> -->

    <h1>Post's Page</h1>

    <div class="app__btns">
      <my-button @click="showDialog">Create Post</my-button>

      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list :posts="posts" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else style="color: green">Loading Posts...</div>

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

import MySelect from '@/components/UI/MySelect';
import axios from "axios";

export default {
  components: {
    PostList,
    PostForm,
    
    MySelect,
  },
  data() {
    return {
      posts: [],

      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: "title", name: "By title" },
        { value: "body", name: "By content" },
      ],

      // below array from the beginning, used before API
      posts2: [
        { id: 1, title: "JavaScript", body: "Some article about javascript." },
        { id: 2, title: "React", body: "Some article about React." },
        { id: 3, title: "Python", body: "Some article about Python." },
      ],
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;

      // tests for get other attributes - see child!
      // console.log(post);
      // console.log(second);

      // console.log(third);
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    inputTitle(e) {
      this.title = e.target.value;
    },

    showDialog() {
      this.dialogVisible = true;
    },

    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;

        //console.log(response);
      } catch (e) {
        alert("Error: ", e);
      } finally {
        this.isPostsLoading = false;
      }
    },

    //  direct creation - see the input options
    // inputBody(e) {
    //     this.body = e.target.value
    // },

    //  ethods for first expo of reactive vue idea
    // addLike() {
    //   this.likes += 1;
    // },
    // addDislike() {
    //   this.dislikes += 1;
    // },
  },

  mounted() {
    this.fetchPosts();
  },

  watch: {
    selectedSort(newValue) {
      console.log(newValue);
    },
    dialogVisible(newValue) {
      console.log(newValue);
    }
  }
}
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

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>