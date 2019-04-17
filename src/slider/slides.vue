<template>
  <div class="vparts-slides"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave"
  >
    <div class="vparts-slides-window">
      <div class="vparts-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="vparts-slides-dots">
      <span v-for="n in childrenLength"
            :class="{active: selectedIndex === n-1}"
            @click="select(n-1)"
      >{{n}}</span>
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
        childrenLength: 0,
        lastSelectedIndex: undefined,
        timerId: undefined
      }
    },
    methods: {
      playAutomatically() {
        if (this.timerId) {
          return
        }
        let run = () => {
          let index = this.names.indexOf(this.getSelected())
          let newIndex = index + 1
          if (newIndex === -1) {
            newIndex = this.names.length + 1
          }
          if (newIndex === this.names.length) {
            newIndex = 0
          }
          this.$emit('update:selected', this.names[newIndex])
          this.select(newIndex)
          this.timerId = setTimeout(run, 2000)
        }
        this.timerId = setTimeout(run, 2000)
      },
      pause() {
        window.clearTimeout(this.timerId)
        this.timerId = undefined
      },
      onMouseEnter() {
        this.pause()
      },
      onMouseLeave() {
        this.playAutomatically()
      },
      select(index) {
        this.$emit('update:selected', this.names[index])
      },
      getSelected() {
        let first = this.$children[0]
        return this.selected || first.name
      },
      updateSlideItem() {
        let selected = this.getSelected()
        this.$children.forEach((vm) => {
          let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
          if(this.lastSelectedIndex === this.$children.length-1&&this.selectedIndex===0) {
            reverse = false
          }
          if(this.lastSelectedIndex ===0 &&this.selectedIndex===this.$children.length-1) {
            reverse = true
          }
          vm.reverse = reverse
          this.$nextTick(() => {
            vm.selected = selected
          })
        })
      }
    },
    mounted() {
      this.updateSlideItem()
      this.playAutomatically()
      this.childrenLength = this.$children.length
      this.lastSelectedIndex = this.selected
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
    
    &-dots {
      padding: 8px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 8px;
        background: #ddd;
        font-size: 12px;
        &:hover{
          cursor: pointer;
        }
        &.active {
          background: black;
          color: white;
          &:hover{
            cursor: pointer;
          }
        }
        
      }
      
    }
    
    &-wrapper {
      position: relative;
    }
  }
</style>