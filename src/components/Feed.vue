<template>
  <section class="section">
    <div class="list is-hoverable">
      <div class="list-item" v-for="article in articles" v-bind:key="article.id">
        <span>{{ article.name }}</span>
        <span>{{ article.published }}</span>
        <a :href="article.url" target="_blank">
          <span class="icon is-small is-right">
            <i class="fas fa-external-link-alt"></i>
          </span>
        </a>
      </div>
    </div>
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
