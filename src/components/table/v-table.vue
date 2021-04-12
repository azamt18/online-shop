<template>
  <div class="v-table">
    <div class="v-table__header">
      <p @click="sortByName">
        Name
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByEmail">
        Email
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByPhone">
        Phone
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByWebsite">
        Website
        <i class="material-icons">unfold_more</i>
      </p>
    </div>
    <div class="v-table__body">
      <div class="body__row">
        <v-table-row
            v-for="row in paginatedUsers"
            :key="row.id"
            :row_data="row"
        />
      </div>
    </div>
    <div class="v-table__pagination">
      <div class="page"
           v-for="page in pages"
           :key="page"
           :class="{'page__selected': page === pageNumber}"
           @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import vTableRow from './v-table-row'

export default {
  name: "v-table",
  data() {
    return {
      usersPerPage: 5,
      pageNumber: 1
    }
  },
  components: {
    vTableRow
  },
  props: {
    users_data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    pageClick(pageNumber) {
      this.pageNumber = pageNumber;
    },
    sortByName() {
      this.users_data.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortByEmail() {
      this.users_data.sort((a, b) => a.email.localeCompare(b.email));
    },
    sortByPhone() {
      this.users_data.sort((a, b) => a.phone.localeCompare(b.phone));
    },
    sortByWebsite() {
      this.users_data.sort((a, b) => a.website.localeCompare(b.website));
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.users_data.length / 5);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;

      return this.users_data.slice(from, to);
    }
  }
}
</script>

<style lang="scss">
.v-table {
  //max-width: 900px;
  margin: 0 auto;

}

.v-table__header {
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #e7e7e7;
  text-align: left;
}

.v-table__header p {
  display: flex;
  flex-basis: 25%;
  text-align: left;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.v-table__pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

.page {
  padding: 12px;
  margin-right: 12px;
  border: solid 1px #aeaeae;
}

.page:hover {
  background: #aeaeae;
  cursor: pointer;
  color: white;
}

.page__selected {
  background: #aeaeae;
  cursor: pointer;
  color: white;
}
</style>