<template>
  <div class="v-parts-table-wrapper" ref="wrapper">
    <div :style="{ height, overflow: 'auto' }" ref="tableWrapper">
      <table
        ref="table"
        class="v-table"
        :class="{ bordered, compact, striped }"
      >
        <thead>
          <tr>
            <th
              v-if="expandField"
              :style="{ width: '50px' }"
              class="v-parts-table-center"
            ></th>
            <th
              v-if="checkable"
              :style="{ width: '50px' }"
              class="v-parts-table-center"
            >
              <input
                ref="allChecked"
                :checked="areAllItemsSelected"
                type="checkbox"
                @change="onChangeAllItems"
              />
            </th>
            <th :style="{ width: '50px' }" v-if="numberVisible">#</th>
            <th
              :style="{ width: column.width + 'px' }"
              v-for="column in columns"
              :key="column.field"
            >
              <div class="v-parts-table-column">
                {{ column.text }}
                <span
                  v-if="column.field in orderBy"
                  class="v-parts-table-sorter"
                  @click="changeOrderBy(column.field)"
                >
                  <g-icon
                    name="asc"
                    :class="{ active: orderBy[column.field] === 'asc' }"
                  ></g-icon
                  ><g-icon
                    name="desc"
                    :class="{ active: orderBy[column.field] === 'desc' }"
                  ></g-icon
                ></span>
              </div>
            </th>
            <th ref="actionsRef" v-if="$scopedSlots.default"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in dataSource">
            <tr :key="item.id">
              <td
                v-if="expandField"
                :style="{ width: '50px' }"
                class="v-parts-table-center"
              >
                <g-icon
                  class="v-parts-table-expand-icon"
                  name="right"
                  @click="expandItem(item.id)"
                />
              </td>
              <td
                v-if="checkable"
                :style="{ width: '50px' }"
                class="v-parts-table-center"
              >
                <input
                  type="checkbox"
                  :checked="inSelectedItems(item)"
                  @change="onChangeItem(item, index, $event)"
                />
              </td>
              <td :style="{ width: '50px' }" v-if="numberVisible">
                {{ index + 1 }}
              </td>
              <template v-for="column in columns">
                <td :style="{ width: column.width + 'px' }" :key="column.field">
                  {{ item[column.field] }}
                </td>
              </template>
              <td v-if="$scopedSlots.default" >
                <div ref="actions"><slot :item="item"></slot></div>
              </td>
            </tr>
            <tr v-if="inExpandedIds(item.id)" :key="`${item.id}-expand`">
              <td :colspan="columns.length + expandedCellColSpan">
                {{ item[expandField] || "空" }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <div v-if="loading" class="v-parts-table-loading">
      <g-icon name="loading"></g-icon>
    </div>
  </div>
</template>
<script>
import GIcon from "./icon";

export default {
  name: "v-parts-table",
  components: {
    GIcon
  },
  props: {
    height: {
      type: Number
    },
    expandField: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    orderBy: {
      type: Object,
      default: () => ({})
    },
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
        if (array.filter(item => item.id === undefined).length > 0) {
          return false;
        }
        return true;
      }
    },
    numberVisible: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    areAllItemsSelected() {
      let a = this.dataSource.map(item => item.id).sort();
      let b = this.selectedItems.map(item => item.id).sort();
      if (a.length != b.length) {
        return false;
      }
      let equal = true;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          equal = false;
          break;
        }
      }
      return equal;
    },
    expandedCellColSpan() {
      let result = 0;
      if (this.checkable) {
        result += 1;
      }
      if (this.expandField) {
        result += 1;
      }
      return result;
    }
  },
  watch: {
    selectedItems() {
      if (this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.indeterminate = false;
      } else if (this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false;
      } else {
        this.$refs.allChecked.indeterminate = true;
      }
    }
  },
  data() {
    return {
      expandedIds: []
    };
  },
  mounted() {
    let table2 = this.$refs.table.cloneNode(false);
    this.table2 = table2;
    table2.classList.add("v-parts-table-copy");
    let tHead = this.$refs.table.children[0];
    let { height } = tHead.getBoundingClientRect();
    this.$refs.tableWrapper.style.marginTop = height + "px";
    this.$refs.tableWrapper.style.height = this.height - height + "px";
    table2.appendChild(tHead);
    this.$refs.wrapper.appendChild(table2);
    if(this.$scopedSlots.default){
      let div = this.$refs.actions[0]
      let {width} = div.getBoundingClientRect()
      console.log(width)
      let parent = div.parentNode
      let styles = getComputedStyle(parent)
      let paddingLeft = styles.getPropertyValue('padding-left')
      let paddingRight = styles.getPropertyValue('padding-right')
      let borderLeft = styles.getPropertyValue('border-left-width')
      let borderRight= styles.getPropertyValue('border-right-width')
      let width2 = width + parseInt(paddingLeft)  + parseInt(paddingRight)  + parseInt(borderLeft)  + parseInt(borderRight) + 'px'
      this.$refs.actionsRef.style.width = width2
      this.$refs.actions.map(div=>{
        div.parentNode.style.width = width2
      })
    }
  },
  beforeDestroy() {},
  methods: {
    changeOrderBy(key) {
      const copy = JSON.parse(JSON.stringify(this.orderBy));
      let oldValue = copy[key];
      if (oldValue === "asc") {
        copy[key] = "desc";
      } else if (oldValue === "desc") {
        copy[key] = true;
      } else {
        copy[key] = "asc";
      }
      this.$emit("update:orderBy", copy);
    },
    inSelectedItems(item) {
      return this.selectedItems.filter(i => i.id === item.id).length > 0;
    },
    onChangeItem(item, index, e) {
      let selected = e.target.checked;
      let copy = JSON.parse(JSON.stringify(this.selectedItems));
      if (selected) {
        copy.push(item);
      } else {
        copy = copy.filter(i => i.id !== item.id);
      }
      this.$emit("update:selectedItems", copy);
    },
    onChangeAllItems(e) {
      let selected = e.target.checked;
      this.$emit("update:selectedItems", selected ? this.dataSource : []);
    },
    expandItem(id) {
      if (this.inExpandedIds(id)) {
        this.expandedIds.splice(this.expandedIds.indexOf(id), 1);
      } else {
        this.expandedIds.push(id);
      }
    },
    inExpandedIds(id) {
      return this.expandedIds.includes(id);
    }
  }
};
</script>
<style scoped lang="scss">
@import "../styles/_var";

.v-parts-table-wrapper {
  $grey: darken($grey, 10%);
  position: relative;
  .v-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $grey;
    &.bordered {
      border: 1px solid $grey;
      td,
      th {
        border: 1px solid $grey;
      }
    }
    td,
    th {
      border-bottom: 1px solid $grey;
      text-align: left;
      padding: 8px;
    }

    &.compact {
      td,
      th {
        padding: 4px;
      }
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

    .v-parts-table-column {
      display: flex;
      align-items: center;

      .v-parts-table-sorter {
        display: inline-flex;
        flex-direction: column;
        margin: 0 4px;
        cursor: pointer;

        svg {
          width: 10px;
          height: 10px;
          fill: $grey;

          &.active {
            fill: red;
          }

          &:first-child {
            position: relative;
            bottom: -1px;
          }

          &:nth-child(2) {
            position: relative;
            top: -1px;
          }
        }
      }
    }
    .v-parts-table-center {
      text-align: center;
    }
  }

  .v-parts-table-loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);

    svg {
      @include spin;
      height: 48px;
      width: 48px;
    }
  }
  .v-parts-table-copy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
  }
  .v-parts-table-expand-icon {
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
}
</style>
