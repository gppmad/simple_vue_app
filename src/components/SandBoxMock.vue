<template>
  <div class="hello">
    <h1>{{ retrivied_from_server }}</h1>
  </div>
</template>

<script>
import msg_json from "../../mock/message_api.json"

export default {
  data () {
    return {
      retrivied_from_server: msg_json.msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
