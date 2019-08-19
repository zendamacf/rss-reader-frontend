<template>
  <section class="section">
    <FeedArticle
      v-for="article in articles"
      :key="article.id"
      :name="article.name"
      :published="article.published"
      :description="article.description"
      :content="article.content"
    ></FeedArticle>
  </section>
</template>

<script>
import axios from 'axios'
import FeedArticle from './FeedArticle.vue'

export default {
  name: 'Feed',
  components: {
    FeedArticle
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getMessage () {
      axios.get('/feeds')
        .then((resp) => {
          this.articles = resp.data
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        })
    }
  },
  created () {
    this.getMessage()
  }
}
</script>

<style scoped>
.article-description {margin-bottom: 10px !important;}
</style>
