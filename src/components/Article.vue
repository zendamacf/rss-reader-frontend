<template>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Article',
  data () {
    return {
      article: {}
    }
  },
  methods: {
    getMessage () {
      axios.get('/article')
        .then((resp) => {
          this.article = resp.data
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