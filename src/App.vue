<template>
  <div class="container">
    <div class="row">
      <div class="d-flex align-items-center justify-content-center my-3">
        <img
          src="https://pinia.vuejs.org/logo.svg"
          alt=""
          style="width: 40px"
        />
        <h4 class="text-warning text-center">Pinia Blog</h4>
      </div>
      <div class="col-md-6 offset-md-3">
        <BlogCreate/>
        <BlogItem v-for="blog in blogs" :key="blog.id" :blog="blog"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogCreate from './components/BlogCreate.vue';
import BlogItem from './components/BlogItem.vue';
import { useBlogStore} from './store/index.js'
import { storeToRefs } from 'pinia';

const blogStore = useBlogStore()
const {blogs} = storeToRefs(blogStore)
</script>

