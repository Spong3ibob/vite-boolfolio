<script >

    import axios from 'axios';
    export default{
       
        data(){
            return{
                posts: [],
            }
        },
        created(){
            axios.get('http://127.0.0.1:8000/api/posts')
            .then((response) => {
                this.posts = response.data;
            });
        },
    }
</script>

<template>
    <div class="container">
        <div class="card" v-for ="post in posts">
            <h2>{{ post.name }}</h2>
            <p>{{ post.descrition }}</p>
        </div>
    </div>
   
</template>

<style scoped>
    .container{
        display: flex;
        flex-wrap: wrap;
    }
    .card{
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        border-radius: 15px;
        margin: 10px;
        padding: 5px;
    }
   
</style>