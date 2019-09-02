<template>
  <section class="section">
    <FeedArticle
      v-for="article in articles"
      :key="article.id"
      :id="article.id"
      :name="article.name"
      :published="article.published"
      :description="article.description"
      :content="article.content"
      :read="article.read"
      v-on:article-remove="remove"
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
      axios.get('/feed')
        .then((resp) => {
          this.articles = resp.data
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        })
    },
    remove (id) {
      this.articles.splice(
        this.articles.findIndex(article => article.id === id),
        1
      )
    }
  },
  created () {
    this.getMessage()
  }
}
</script>
