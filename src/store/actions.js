import mutations from './mutations'
import Vue from 'vue'
import state from './state'

function key_down_input_handler(e) {
  console.log(e)
  if (e.key == 'Backspace') {
    state.VerificationNumArray.splice(state.VerificationNumArray.length - 1, 1)
    console.log(state.VerificationNumArray)
  } else if (state.VerificationNumArray.length < 4 && parseInt(e.key) < 10) {
    state.VerificationNumArray.push(e.key)

  }
  for (var i = 0; i < state.VerificationNumArray.length; i++) {
    state.Verification[i].VerificationNum = state.VerificationNumArray[i]
    console.log(state.Verification[i].VerificationNum)
  }

  // console.log(state.VerificationNumArray)
  // if(e.key == )
}
export default {
  telephone_input({ commit }) {
    // console.log('telephone')
    commit('TELEPHONE_INPUT')
  },
  close_mask({ commit }) {
    commit('CLOSE_MASK')
  },
  switch_nav({ commit }, index) {
    commit('SWITCH_NAV', index)
  },
  switch_navList({ commit }) {
    commit('SWITCH_NAVLIST')
  },
  show_suggest({ commit }, key) {
    commit('SHOW_SUGGEST', key)
  },
  close_suggest({ commit }) {
    commit('CLOSE_SUGGEST')
  },
  switch_input_city({ commit }) {
    commit('SWITCH_INPUT_CITY')
  },
  get_location({ commit, state }) {
    AMap.plugin('AMap.Geolocation', function () {
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
        commit('SET_POSITON', result)
      })
    })
  },
  get_location2({ commit, state }, el) {
    console.log(el)
    var map = new AMap.Map(el, {
      resizeEnable: true,
      zoom: 10
    })
    map.plugin(['AMap.Geolocation', 'AMap.Autocomplete'], function () {
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
        console.log(result)
      })
      var auto = new AMap.Autocomplete({
        input: "tipinput"
      })
      map.addControl(geolocation);
    })
  },
  choose_city_name({ commit }, index) {
    commit('CHOOSE_CITY_NAME', index)
    AMap.plugin('AMap.Geocoder', function () {
      var geocoder = new AMap.Geocoder({ //城市，默认：“全国”
        radius: 1000, //范围，默认：500
        extensions: 'all'
      });
      //地理编码,返回地理编码结果
      geocoder.getLocation(state.position.city, function (status, result) {
        // if (status === 'complete' && result.info === 'OK') {
        var center = [result.geocodes[0].location.lng, result.geocodes[0].location.lat]
        var map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 16,
          center: center
        });
        console.log(result)
        map.addControl(geocoder)
        // }
      });

    })
  },
  check_telephone({ commit }, telephone) {
    commit('CHECK_TELEPHONE', telephone)
  },
  toMessageConfirm({ commit }, telephone) {
    commit('TOMESSAGECONFIRM', telephone)
  },
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
  time_order({ commit, state }, value) {
    clearInterval(state.Interval)
    state.Interval = setInterval(() => {
      value--
      state.tipsContent = `${value}`

    }, 1000)
  },
  active_input({ commit, state }, index) {
    state.Verification.forEach(function (item) {
      item.isActive = false
    });
    state.Verification[index].isActive = true
  },
  key_down_input({ commit, state }) {
    window.addEventListener('keydown', key_down_input_handler)
  },
  remove_key_down_input({ commit }) {
    window.removeEventListener('keydown', key_down_input_handler)
  },
  save_telephone({ commit, state }) {
    commit('SAVE_TELEPHONE')
  },
  get_telephone({ commit }) {
    commit('GET_TELEPHONE')
  },
  close_usersidebar({ commit }) {
    console.log('actions')
    commit('CLOSE_USERSIDEBAR')
  },
  autocomplete ({commit, state}, value) {
    console.log(value)
    AMap.plugin('AMap.Autocomplete', function() {
      var autocomplete = new AMap.Autocomplete({})
      autocomplete.search(value, function(status, result) {
        console.log(result.tips)
        state.autocompleteList = result.tips
      })
    })
  },
  choose_address ({commit}, index) {
    commit('CHOOSER_ADDRESS', index)
    commit('CLOSE_SUGGEST')
  },
  get_city_list({ commit, state }) {

  }
}
