  <script>
  import axios from "axios";
  import AppCard from "./AppCard.vue";
  
  export default {
    components: {
      AppCard,
    },
    data() {
      return {
        posts: [],
      };
    },
    created() {
      axios.get("http://localhost:8000/api/posts").then((response) => {
        this.posts = response.data;
      });
    },
  };
  </script>

  <template>
    <section>
      <h2>Lista Posts</h2>
      <div class="container">
        <div class="row gy-3">
          <div class="col-md-4" v-for="post in posts">
            <AppCard :data="post" />
          </div>
        </div>
      </div>
      <ul></ul>
    </section>
  </template>
  
  <style lang="scss" scoped></style>