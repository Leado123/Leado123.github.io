<script setup>
import { ref, onMounted } from 'vue'
import ArticleIndex from './articleIndex'

const articles = ref([])

onMounted(() => {
  articles.value = ArticleIndex
  console.log('Articles:', articles.value) // Debugging log
})
</script>

<template>
  <div>
    <ul class="articles">
      <li v-for="(article, index) in articles" :key="index">
      <a :href="`/blog/docs/${article.file}`">{{ article.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.articles {
  display: grid;
  gap: 20px;
}
</style>