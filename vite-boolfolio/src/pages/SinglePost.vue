  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        post: null,
      };
    },
    created() {
      axios
        .get(`http://localhost:8000/api/posts/${this.$route.params.type}`)
        .then((response) => {
          this.post = response.data;
        })
    },
  };
  </script>
  
  <template>
    <div v-if="post">
      <h1>{{ post.name }}</h1>
      <p>{{ post.descrition }}</p>
      <h2>{{ post.type }}</h2>
    </div>
  </template>

  <style lang="scss" scoped></style>