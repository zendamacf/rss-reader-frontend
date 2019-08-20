<template>
  <article class="message">
    <div class="message-header">
      <p>{{ name }} {{ published }}</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      <div v-if="expanded" class="content article-description" v-html="content"></div>
      <div v-else>
        <div class="content article-description" v-html="description"></div>
        <a class="is-italic" v-on:click="showBody">Read More</a>
      </div>
    </div>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Article',
  props: {
    id: Number,
    name: String,
    published: String,
    description: String,
    content: String
  },
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    showBody () {
      this.expanded = true
      this.markRead()
    },
    markRead () {
      let articleid = this.id
      axios({
        url: '/article/markread',
        data: { articleid: articleid },
        method: 'POST'
      })
    }
  }
}
</script>
