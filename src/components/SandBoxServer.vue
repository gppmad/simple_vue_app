<template>
  <div class="hello">
    <h1>{{ retrivied_from_server }}</h1>
  </div>
</template>

<script>
//import axios from 'axios';

//import msg_json from "../../moc/message_api.json"

export default {
  data () {
    return {
      retrivied_from_server: "retrivied from Server"
    }
  },
  // mounted () {
  //   axios
  //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(response => (this.retrivied_from_server = response))
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
