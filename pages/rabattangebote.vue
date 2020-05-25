<template>
  <div id="rabattangebote" v-if="rabattangebote && rabattangebote.length > 0">
    <ul>
      <li
        v-for="rabattangebot in rabattangebote"
        :key="rabattangebot.url"
      >
        <a :href="rabattangebot.url">{{rabattangebot.name}}</a>
      </li>
    </ul>
  </div>
  <p v-else id="rabattangebote">Currently, we don't have any Rabatt Aktionen</p>
</template>

<script>
import { getRabattAktionen } from "../api"

export default {
  data () {
    return {
      rabattangebote: getRabattAktionen()
    } 
  }
}
</script>
