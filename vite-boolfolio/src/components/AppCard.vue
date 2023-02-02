  <script>
  export default {
    props: {
      data: Object,
    },
    methods: {
      truncateText(text) {
        return text.substring(0, 200) + "...";
      },
    },
  };
  </script>
  
  <template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ data.name }}</h5>
        <p class="card-text">
          {{ truncateText(data.descrition) }}
        </p>
        <router-link
          :to="{ name: 'single-post', params: { type: data.type } }"
          class="btn btn-primary">Info</router-link>
      </div>
    </div>
  </template>

  <style lang="scss" scoped></style>