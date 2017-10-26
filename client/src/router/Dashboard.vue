<template>
  <div>
    This is the dashboard
    <pre>{{ $root.user }}</pre>
    <form @submit.prevent="uploadPicture">
      <input type="file" name="picture" @change="picture = $event.target.files[0]">
      <br>
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      picture: ''
    }
  },
  methods: {
    uploadPicture () {
      const formData = new FormData()
      formData.append('picture', this.picture)
      // you can add more information to the formdata
      formData.append('myMessage', 'Hello')
      axios.post('http://localhost:3000/api/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response.data)
      })
    }
  }
}
</script>
