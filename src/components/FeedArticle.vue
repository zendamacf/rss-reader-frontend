<template>
  <div class="card" :class="readClass">
    <header class="card-header">
      <p class="card-header-title">
        <span>{{ name }}</span>
        <br>
        <span class="is-italic">{{ moment(published).format('DD/MM/YYYY') }}</span>
      </p>
      <a class="card-header-icon" aria-label="Dismiss" v-on:click="dismiss">
        <span class="icon">
          <i class="fas fa-times"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div v-if="expanded" class="content" v-html="content"></div>
      <div v-else>
        <div class="content" v-html="description"></div>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" v-on:click="showBody">Read More</a>
    </footer>
  </div>
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
    dismiss () {
      this.markRead()
      this.$emit('article-remove', this.id)
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
.card {margin-bottom: 15px;}
</style>
