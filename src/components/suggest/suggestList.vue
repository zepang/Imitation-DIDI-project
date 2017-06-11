<template>
<div class="page-list">
  <div class="suggestlist">
    <div class="split"></div>
    <div class="list-wrapper">
      <mt-index-list v-show="!isChoosed">
          <template v-for="(item,i) in cityList">
            <mt-index-section :index="item.name"  >
              <template v-for="(city,j) in item.cityName">
                <mt-cell :title="city" @click.native="choose_city(i,j)" ></mt-cell>
              </template>
            </mt-index-section>
          </template>
        </mt-index-list>
    </div>
  </div>
</div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon'
import {mapState,mapActions} from 'vuex'

export default {
  data() {
    return {
      self: ''
    }
  },
  components: {
    Icon
  },
  computed: {
    ...mapState([
      'cityList',
      'isChoosed'
    ])
  },
  methods: {
    choose_city:(i,j) => {
      var index = {
        i,
        j
      }
      console.log(this)
      self.$store.dispatch('choose_city_name', index)

    }
  },
  created () {
    self = this
    // console.log(this.cityList)
  }
}
</script>
<style scoped>
.suggest .page-city,
.suggest .page-list,
.suggest .page-map {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}

.suggest .page-city,
.suggest .page-list {
  top: 44px;
}

.suggestlist {
  width: 100%;
  height: 100%;
  background: #f3f4f5;
}

.suggestlist .split {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 10px;
  background: #f3f4f5;
}

.suggestlist .list-wrapper {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
}

li {
  list-style: none;
  /*height: 30px;*/
}

.border-bottom-1px:after,
.border-bottom-1px:before,
.border-left-1px:after,
.border-left-1px:before,
.border-right-1px:after,
.border-right-1px:before,
.border-top-1px:after,
.border-top-1px:before {
  content: "";
  display: block;
  position: absolute;
  transform-origin: 0 0;
}

.border-bottom-1px:after {
  border-bottom: 1px solid #ebebeb;
  left: 0;
  bottom: 0;
  width: 100%;
  transform-origin: 0 bottom;
}

.border-bottom-1px,
.border-left-1px,
.border-right-1px,
.border-top-1px {
  position: relative;
}

.suggestlist .list-wrapper .list-item {
  padding: 0 16px;
}

.border-bottom-1px:after,
.border-bottom-1px:before,
.border-left-1px:after,
.border-left-1px:before,
.border-right-1px:after,
.border-right-1px:before,
.border-top-1px:after,
.border-top-1px:before {
  content: "";
  display: block;
  position: absolute;
  transform-origin: 0 0;
}

.suggestlist .list-wrapper .list-item .item-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  /*font-size: 0;*/
}

.suggestlist .list-wrapper .list-item .item-wrapper .icon {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 22px;
  flex: 0 0 22px;
  width: 22px;
  color: #999;
  font-size: 12px;
}

.suggestlist .list-wrapper .list-item .item-wrapper .address-wrapper {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  height: 60px;
  text-align: left;
  padding: 0 10px;
}

.suggestlist .list-wrapper .list-item .item-wrapper .address-wrapper .address-info {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 20px;
}

.suggestlist .list-wrapper .list-item .item-wrapper .address-wrapper .address-info .displayname {
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  color: #333;
}

.address-wrapper .address {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  color: #999;
}

.mint-indexlist {
  text-align: left;
}
</style>
