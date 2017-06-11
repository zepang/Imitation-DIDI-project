import mutations from './mutations'
import Vue from 'vue'
import state from './state'

export default {
  // 手机号输入
  telephone_input({ commit  }) {
    commit('TELEPHONE_INPUT')
  },
  // 关闭遮罩
  close_mask({ commit }) {
    commit('CLOSE_MASK')
  },
  // 菜单切换 active
  switch_nav({ commit }, index) {
    commit('SWITCH_NAV', index)
  },
  // 菜单切换
  switch_navList({ commit }) {
    commit('SWITCH_NAVLIST')
  },
  //选址
  show_suggest({ commit }, key) {
    commit('SHOW_SUGGEST', key)
  },
  // 关闭选址
  close_suggest({ commit }) {
    commit('CLOSE_SUGGEST')
  },
  switch_input_city({ commit }) {
    commit('SWITCH_INPUT_CITY')
  },
  // 关闭定位错误提示
  close_location_error({ commit }) {
    commit('CLOSE_LOCATION_ERROR')
  },
  //获取详细定位
  getCurrentPosition({ commit, state }, map) {
    AMap.plugin(['AMap.Geolocation', 'AMap.Autocomplete'], function () {
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true,     //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        extensions: 'all'
      });
      geolocation.getCurrentPosition(function (status, result) {
        // console.log(result)
        if(result.aois && result.aois.length>0 ){
          console.log(result)
          commit('SET_POSITON', result)
           map.addControl(geolocation);
        }else {
          if (state.hasLocation) {
            // console.log(123)
            return false
          } else {
            state.ismask = true
            state.location = true
            state.hasLocation = true
          }
        }
      }) 
    })
  },
  
  // 选择城市，地图中心切换
  choose_city_name({ commit }, index) {
    commit('CHOOSE_CITY_NAME', index)
    AMap.plugin('AMap.Geocoder', function () {
      var geocoder = new AMap.Geocoder({
        radius: 1000,
        extensions: 'all'
      });
      geocoder.getLocation(state.position.city, function (status, result) {
        var center = [result.geocodes[0].location.lng, result.geocodes[0].location.lat]
        var map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 16,
          center: center
        });
        console.log(result)
        map.addControl(geocoder)
      });

    })
  },
  // 手机正则
  check_telephone({ commit }, telephone) {
    commit('CHECK_TELEPHONE', telephone)
  },
  // 验证码
  toMessageConfirm({ commit }, telephone) {
    commit('TOMESSAGECONFIRM', telephone)
  },
  // 验证码倒计时
  time({ commit, state }, value) {
    state.tips = value
    state.timeCount = true
    state.tipsContent = `${state.tips}秒后重发`
    // Interval = null
    console.log(state.Interval)
    clearInterval(state.Interval)
    state.Interval = setInterval(() => {
      state.tips--
      if (state.tips < 1) {
        state.timeCount = false
        clearInterval(state.Interval)
      } else {
        state.tipsContent = `${state.tips}秒后重发`
      }
    }, 1000)
  },
  // 下单呼叫倒计时
  time_order({ commit, state }, value) {
    clearInterval(state.Interval)
    state.Interval = setInterval(() => {
      value--
      state.tipsContent = `${value}`
    }, 1000)
  },

  // 保存手机号至本地
  save_telephone({ commit, state }) {
    commit('SAVE_TELEPHONE')
  },
  // 首次加载确认用户登录
  get_telephone({ commit }) {
    commit('GET_TELEPHONE')
  },
  // 关闭侧边栏
  close_usersidebar({ commit }) {
    console.log('actions')
    commit('CLOSE_USERSIDEBAR')
  },
  //地址输入提示
  autocomplete({ commit, state }, value) {
    console.log(value)
    AMap.plugin('AMap.Autocomplete', function () {
      var autocomplete = new AMap.Autocomplete({})
      autocomplete.search(value, function (status, result) {
        state.autocompleteList = result.tips
      })
    })
  },
  //选择地址
  choose_address({ commit }, index) {
    commit('CHOOSER_ADDRESS', index)
    commit('CLOSE_SUGGEST')
  },
  close_autocompletelist({ commit }) {
    commit('CLOSE_AUTOCOMPLETELIST')
  }
}
