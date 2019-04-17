<template>
  <div class="vparts-slides">
    <div class="vparts-slides-window">
      <div class="vparts-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="vparts-slides-dots">
      <span v-for="n in childrenLength"
            :class="{active: selectedIndex === n-1}"
            @click="select(n-1)"
      >{{n-1}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VParts-slides',
    props: {
      selected: {
        type: String
      },
      autoPlay: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      selectedIndex() {
        return this.names.indexOf(this.selected) || 0
      },
      names() {
        return this.$children.map(vm => vm.name)

      }
    },
    data() {
      return {
        childrenLength: 0
      }
    },
    methods: {
      playAutomatically() {
        let index = this.names.indexOf(this.getSelected())
        let run = () => {
          let newIndex = index - 1
          if (newIndex === -1) {
            newIndex = this.names.length - 1
          }
          if (newIndex === this.names.length) {
            newIndex = 0
          }
          this.$emit('update:selected', this.names[newIndex])
          setTimeout(run, 2000)
        }
        setTimeout(run, 2000)
      },
      select(index) {
        this.$emit('update:selected', this.names[index])
      },
      getSelected() {
        let first = this.$children[0]
        return this.selected || first.name
      },
      updateSlideItem() {
        let first = this.$children[0]
        let selected = this.getSelected()
        this.$children.forEach((vm) => {
          vm.selected = selected
          let newIndex = this.names.indexOf(selected)
          let oldIndex = this.names.indexOf(vm.name)
          vm.reverse = newIndex > oldIndex ? false : true
        })
      }
    },
    mounted() {
      this.updateSlideItem()
      this.playAutomatically()
      this.childrenLength = this.$children.length

    },
    updated() {
      this.updateSlideItem()
    }
  }
</script>

<style lang="scss" scoped>
  .vparts-slides {
    border: 1px solid black;
    
    &-window {
      overflow: hidden;
    }
    &-dots{
      >span{
        &.active{
          background: red;
        }
      }
      
    }
    &-wrapper {
      position: relative;
    }
  }
</style>