<template>
  <article class="message" :class="readClass">
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
    content: String,
    read: Boolean
  },
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    readClass () {
      return (this.read) ? 'is-read' : ''
    }
  },
  methods: {
    showBody () {
      this.expanded = true
      this.read = true
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

<style scoped>
.message.is-read .message-header {
  background-color: #c0cbd6;
}
</style>
