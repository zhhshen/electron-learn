<template lang="html">
  <div class="multiple-select-wrap">
    <div class="toggle-wrap">
      <div class="search-wrap">
        <div class="default-content" v-if="endItems.length">
          <ul class="default-options-wrap">
            <li v-for="(item, inx) in endItems" v-if="endItems.length" @click="toFrom(item, inx)"><span>{{ item.label }}</span></li>
          </ul>
        </div>
        <input type="text" :placeholder="placeholder" v-model="filterKey" class="form-multiple-input">
      </div>
      <ul class="options-wrap" v-if="items.length">
        <li :class="{ active: item.active}" v-for="(item, inx) in items" @click="toEnd(item, inx)" >{{ item.label }}</li>
      </ul>
      <ul class="options-wrap" v-else>
        <li>匹配项为空</li>
      </ul>
      <div class="options-meta" v-if="actions">
        <label ><input type="checkbox" name="" v-model="isFullSelect">全选</label>
        <span @click="deleteAll">清空</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      filterKey: '',
      cacheItems: [],
      endItems: [],
      serviceIds: [],
      isFullSelect: false,
      lastItem: 200
    }
  },
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    placeholder: {
      type: String,
      default: '请输入搜索关键词'
    },
    actions: Boolean,
    value: {
      required: false
    }
  },
  computed: {
    filterItems () {
      let key = this.filterKey
      if (key) {
        return this.items.filter((item) => {
          return (item.value.indexOf(newVal) !== -1 || item.label.indexOf(newVal) !== -1)
        })
      } else {
        return this.items.slice(0)
      }
    }
  },
  watch: {
    isFullSelect (newVal, oldVal) {
      this.endItems.splice(0)
      this.serviceIds.splice(0)
      this.items.map(function (item) {
        if (newVal) {
          this.serviceIds.push(item.id)
          item.active = true
        } else {
          item.active = false
        }
        return item
      })
      this.$emit('input', this.serviceIds)
    },

    lastItem (newVal) {
      if (newVal > this.items.length) {
        this.filterItems = this.filterItems.slice(0)
      } else {
        this.filterItems = this.filterItems.slice(0, newVal)
      }
    }
  },
  mounted: function () {
    this.$nextTick(function() {
      var content = this.$el.querySelector('.options-wrap')
      content.addEventListener('scroll', this.onScroll, false)
    })
  },
  methods: {
    toFrom: function (deleteItem) {
      var isDelete = this.endItems.indexOf(deleteItem)
      deleteItem.active = false;
      this.items.splice(this.items.indexOf(deleteItem), 1, deleteItem);
      this.endItems.splice(isDelete, 1)
      this.serviceIds.splice(isDelete, 1)
      this.$emit('input', this.serviceIds)
    },

    toEnd: function (select, inx) {
      if (this.isFullSelect) return
      select.active = true
      this.filterItems.splice(inx, 1, select)
      if (this.endItems.length) {
        var isSelect = this.endItems.indexOf(select)
        if (isSelect>=0) {
          select.active = false;
          this.filterItems.splice(this.filterItems.indexOf(select), 1, select);
          this.endItems.splice(isSelect, 1);
          this.serviceIds.splice(isSelect, 1);
        } else {
          this.endItems.push(select)
          this.serviceIds.push(select.id)
        }
      } else {
        this.endItems.push(select)
        this.serviceIds.push(select.id)
      }
      this.endItems.sort(function (a, b) {
        return a.id - b.id
      })
      this.$emit('input', this.serviceIds)
    },

    deleteAll: function () {
      if (this.endItems.length) {
        this.endItems.forEach(function (item, index) {
          item.active = false
          this.filterItems.splice(index, 1, item)
        })
        this.endItems.splice(0)
        this.serviceIds.splice(0)
        this.isFullSelect = false
      } else if (this.isFullSelect){
        this.isFullSelect = false
      }
      this.$emit('input', this.serviceIds)
    },

    onScroll: function () {
      var content = this.$el.querySelector('.options-wrap')
      var showMoreItems = (content.scrollHeight - (content.scrollTop + content.clientHeight)) < 200;
      if (showMoreItems) {
        this.lastItem += 200
      }
    }
  },

  beforeDestroy () {
    var content = this.$el.querySelector('.options-wrap')
    content.removeEventListener('scroll', this.onScroll, false)
  }
}
</script>

<style lang="less" scoped>
.title-content {
  position: relative;
  border: 1px solid #eee;
  max-height: 300px;
  height: 340px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
}
.toggle-wrap {
  padding-left: 0;
  padding-right: 0px;
  border: 1px solid #eee;
}
.form-multiple-input {
  display: inline-block;
  width: 300px;
  height: 38px;
  line-height: 28px;
  padding: 5px 10px;
  border: 1px solid #d6c6c6;
  border-radius: 3px;
  vertical-align: middle;
  outline: none;
  font-size: 14px;
}
.options-wrap {
  position: relative;
  max-height: 300px;
  height: 340px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-left: 0;
}
.options-wrap li {
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
}
.options-wrap li:hover {
  background: rgba(0,0,0,.12);
}
.options-wrap li.active {
  /*background: #1E9FFF;*/
  color: #2196f3;
}
.default-content {
  padding: 0;
  clear: both;
  border: 1px solid #eee;
  max-height: 380px;
  overflow: hidden;
}
.default-options-wrap {
  float: left;
  padding: 10px;
  height: auto;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}
.default-options-wrap li {
    float: left;
    margin-bottom: 10px;
    margin-right: 10px;
    position: relative;
    border-radius: 30px;
    background-color: #1E9FFF;
    box-shadow: none;
    color: #fff;
    line-height: 16px;
    padding: 5px 20px 5px 10px;
    max-width: 160px;
}
.default-options-wrap li::after{
  top: 50%;
  right: 0px;
  display: block;
  width: 18px;
  height: 18px;
  margin-top: -11px;
  outline: 0;
  font-size: 14px;
  position: absolute;
  content: 'x';
  color: #fff;
  cursor: pointer;
}
.default-options-wrap li span{
  display: inline-block;
  position: relative;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 18px;
  height: 36px;
  -webkit-line-clamp: 2;
  -moz-line-clamp: 2;
  line-clamp: 2;
  max-height: 36px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}
.options-meta {
  border-top: 1px solid #f5f5f5;
  padding: 10px 15px;
}
.options-meta input {
  margin-right: 10px;
}
.options-meta span {
  cursor: pointer;
}
.options-meta label {
  margin-right: 10px;
  cursor: pointer;
  font-weight: 400;
}
</style>
