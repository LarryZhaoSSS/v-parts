<template>
  <div class="v-parts-table-wrapper">
    <table class="v-table" :class="{bordered,compact,striped}">
      <thead>
      <tr>
        <th><input ref="allChecked" :checked="areAllItemsSelected" type="checkbox" @change="onChangeAllItems"></th>
        <th v-if="numberVisible">#</th>
        <th v-for="column in columns" :key="column.field">{{ column.text }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in dataSource" :key="item.id">
        <td><input type="checkbox" :checked="inSelectedItems(item)" @change="onChangeItem(item,index,$event)"></td>
        <td v-if="numberVisible">{{ index + 1 }}</td>
        <template v-for="column in columns" >
          <td :key="column.field">{{ item[column.field] }}</td>
        </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "v-parts-table",
  props: {
    striped: {
      type: Boolean,
      default: true
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    compact: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array,
      required: true,
      validator(array) {
        if(array.filter(item=>item.id===undefined).length > 0) {
          return false
        }
        return true
      }
    },
    numberVisible: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    areAllItemsSelected() {
      let a = this.dataSource.map(item=>item.id).sort()
      let b = this.selectedItems.map(item=>item.id).sort()
      if(a.length != b.length) {
        return false
      }
      let equal = true
      for(let i=0;i<a.length;i++) {
        if(a[i]!==b[i]) {
          equal = false
          break
        }
      }
      return equal
    }
  },
  watch:{
    selectedItems() {
      if(this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.indeterminate = false
      } else if(this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false
      } else {
        this.$refs.allChecked.indeterminate = true
      }
    }
  },
  methods: {
    inSelectedItems(item) {
     return  this.selectedItems.filter(i=>i.id === item.id).length > 0
    },
    onChangeItem(item, index, e) {
      let selected = e.target.checked
      let copy = JSON.parse(JSON.stringify(this.selectedItems))
      if (selected) {
        copy.push(item)
      } else {
        copy = copy.filter(i=>i.id!==item.id)
      }
      this.$emit('update:selectedItems', copy)
    },
    onChangeAllItems(e) {
      let selected = e.target.checked
      this.$emit('update:selectedItems', selected ? this.dataSource : [])
    }
  }


}
</script>
<style scoped lang="scss">
@import "../styles/_var";

.v-parts-table-wrapper {
  $grey: darken($grey, 10%);

  .v-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $grey;

    &.bordered {
      border: 1px solid $grey;

      td, th {
        border: 1px solid $grey;
      }
    }

    &.compact {
      td, th {
        padding: 4px;
      }
    }

    td, th {
      border-bottom: 1px solid $grey;
      text-align: left;
      padding: 8px;
    }

    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: white;
          }

          &:nth-child(even) {
            background: lighten($grey, 10%);
          }
        }
      }
    }

  }
}
</style>