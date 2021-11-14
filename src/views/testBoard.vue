<template>
  <div >
      <v-data-table
        :headers="headers"
        :items="fetchedNews"
        :page.sync="page"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      ></v-data-table>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('testStore')
export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created () {
    this.FETCH_NEWS(this.page)
  },
  methods: {
    ...mapActions([
      'FETCH_NEWS'
    ])
  },
  data () {
    return {
      page: 1,
      pageCount: 10,
      itemsPerPage: 10,
      headers: [
        { text: '제목', value: 'title' },
        { text: '점수', value: 'points' },
        { text: '사용자', value: 'user' },
        { text: '작성시간', value: 'time_ago' },
        { text: '댓글수', value: 'comments_count' }
      ]
    }
  }
}
</script>

<style>

</style>
