<template>
  <div class="vparts-slides"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave"
       @touchstart="onTouchStart"
       @touchmove="onTouchMove"
       @touchend="onTouchEnd"
  >
    <div class="vparts-slides-window">
      <div class="vparts-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="vparts-slides-dots">
      <span @click="onClickPrev">
        <v-icon name="left"></v-icon>
      </span>
      <span v-for="n in childrenLength"
            :class="{active: selectedIndex === n-1}"
            :data-index="n-1"
            @click="select(n-1)"
      >{{n}}</span>
      <span @click="onClickNext">
        <v-icon name="right"></v-icon>
      </span>
    </div>
  </div>
</template>

<script>
  import VIcon from '../icon'
  export default {
    name: 'VParts-slides',
    components: {VIcon},
    props: {
      selected: {
        type: String
      },
      autoPlay: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      selectedIndex() {
        let index = this.names.indexOf(this.selected)
        return index === -1 ? 0 : index
      },
      names() {
        return this.items.map(vm => vm.name)

      },
      items () {
        return this.$children.filter(vm=>vm.$options.name === 'VPartsSlidesItem')
      }
    },
    data() {
      return {
        childrenLength: 0,
        lastSelectedIndex: undefined,
        timerId: undefined,
        startTouch: undefined,
      }
    },
    methods: {
      onClickPrev () {
        this.select(this.selectedIndex - 1)
      },
      onClickNext () {
        this.select(this.selectedIndex + 1)
      },
      onTouchStart(e) {
        this.pause()
        if (e.touches.length > 1) {
          return
        }
        this.startTouch = e.touches[0]
      },
      onTouchMove() {

      },
      onTouchEnd(e) {
        let endTouch = e.changedTouches[0]
        let {clientX: x1, clientY: y1} = this.startTouch
        let {clientX: x2, clientY: y2} = endTouch
        if (endTouch.clientX > this.startTouch.clientX) {
          console.log('right')
        }
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        let deltaY = Math.abs(y2 - y1)
        let rate = distance / deltaY
        if (rate > 2) {
          console.log('在滑动')
          if (x2 > x1) {
            this.select(this.selectedIndex - 1)
          } else {
            this.select(this.selectedIndex + 1)
          }
        }
        this.playAutomatically()
      },
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
      select(newIndex) {
        this.lastSelectedIndex = this.selectedIndex
        if (newIndex === -1) {
          newIndex = this.names.length - 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        this.$emit('update:selected', this.names[newIndex])
      },
      getSelected() {
        let first = this.items[0]
        return this.selected || first.name
      },
      updateSlideItem() {
        let selected = this.getSelected()
        this.items.forEach((vm) => {
          let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
          if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
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
      if(this.autoPlay) {
        this.playAutomatically()
      }
      this.childrenLength = this.items.length
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
        
        &:hover {
          cursor: pointer;
        }
        
        &.active {
          background: black;
          color: white;
          
          &:hover {
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