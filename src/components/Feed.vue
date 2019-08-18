<template>
  <section class="section">
    <article class="message" v-for="article in articles" :key="article.id">
      <div class="message-header">
        <p>{{ article.name }} {{ article.published }}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body" v-html="article.content"></div>
    </article>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Feed',
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
