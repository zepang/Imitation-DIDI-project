const TELEPHONE_INPUT = 'TELEPHONE_INPUT',
  CLOSE_MASK = 'CLOSE_MASK',
  SWITCH_NAV = 'SWITCH_NAV',
  SWITCH_NAVLIST = 'SWITCH_NAVLIST',
  SHOW_SUGGEST = 'SHOW_SUGGEST',
  CLOSE_SUGGEST = 'CLOSE_SUGGEST',
  INIT_MAP = 'INIT_MAP',
  SWITCH_INPUT_CITY = 'SWITCH_INPUT_CITY',
  CHOOSE_CITY_NAME = 'CHOOSE_CITY_NAME',
  CHECK_TELEPHONE = 'CHECK_TELEPHONE',
  TOMESSAGECONFIRM = 'TOMESSAGECONFIRM',
  SAVE_TELEPHONE = 'SAVE_TELEPHONE',
  GET_TELEPHONE = 'GET_TELEPHONE',
  CLOSE_USERSIDEBAR = 'CLOSE_USERSIDEBAR',
  SET_POSITON = 'SET_POSITON',
  CHOOSER_ADDRESS = 'CHOOSER_ADDRESS',
  CLOSE_LOCATION_ERROR = 'CLOSE_LOCATION_ERROR',
  WEB_ERROR = 'WEB_ERROR',
  CLOSE_AUTOCOMPLETELIST = 'CLOSE_AUTOCOMPLETELIST'

export default {
  // 手机输入登录
  [TELEPHONE_INPUT](state) {
    if (state.islogined) {
      state.usersidebar = true
    } else {
      state.checkTelephone = true
      state.ismask = true
    }

  },
  // 关闭遮罩层
  [CLOSE_MASK](state) {
    state.checkTelephone = false
    state.messageConfirm = false
    state.ismask = false
  },
  // 菜单切换高亮
  [SWITCH_NAV](state, index) {
    state.navList.forEach(function (item) {
      item.isActive = false
    });
    state.navList[index].isActive = true
  },
  // 下拉菜单切换
  [SWITCH_NAVLIST](state) {
    state.navListActive = state.navListActive ? false : true
    state.shadowActive = state.shadowActive ? false : true
  },
  // 显示选址
  [SHOW_SUGGEST](state, key) {
    // console.log(state)
    state.startOrEnd = key
    console.log(state.startOrEnd)
    state.suggest = state.suggest ? false : true
    console.log(state.suggest)
  },
  // 关闭选址
  [CLOSE_SUGGEST](state) {
    state.suggest = state.suggest ? false : true
    state.isChoosed = true
  },
  [SWITCH_INPUT_CITY](state) {
    state.isChoosed = !state.isChoosed
  },
  // 选择城市
  [CHOOSE_CITY_NAME](state, index) {
    // console.log(state.cityList[index.i].cityName[index.j])
    state.position.city = state.cityList[index.i].cityName[index.j]
    state.isChoosed = true
    console.log(state.position.city)
  },
  // 校验手机号
  [CHECK_TELEPHONE](state, telephone) {
    if (telephone) {
      // console.log(telephone)
      var reg = /^1[0-9]{10}$/
      if (reg.test(telephone)) {
        state.isTelephoneVal = true
        state.telephone = telephone
      } else {
        state.isTelephoneVal = false
      }
    } else {
      state.isTelephoneVal = false
    }
  },
  // 显示验证码输入框
  [TOMESSAGECONFIRM](state, telephone) {
    // console.log(1)
    state.checkTelephone = false
    state.messageConfirm = true
  },
  // 保存手机
  [SAVE_TELEPHONE](state) {
    localStorage.setItem('telephone', state.telephone)
    state.islogined = true
  },
  // 获取本地手机号
  [GET_TELEPHONE](state) {
    state.islogined = localStorage.getItem('telephone') ? true : false
    if(state.islogined) {state.telephone = localStorage.getItem('telephone')}
    // state.usersidebar = localStorage.getItem('telephone') ? true : false
  },
  // 关闭侧边栏
  [CLOSE_USERSIDEBAR](state) {
    state.usersidebar = !state.usersidebar
    console.log(state.usersidebar)
  },
  // 保存当前位置
  [SET_POSITON](state, result) {
    console.log('postion')
    const position = {
      address:result.aois[0].name,
      city: result.addressComponent.city
    }
    state.position = position
    // state.position.address =position.address
    // state.position.city = position.city

    
    // state.position.address = result.aois[0].name
    // state.city = result.addressComponent.city
    // console.log(state.position)
  },
  // 选址
  [CHOOSER_ADDRESS](state, index){
    console.log(state.startOrEnd)
    if(state.startOrEnd == 'getOn'){
      state.address.start = state.autocompleteList[index].name
      console.log(state.position.start)
    }else{
      state.address.end = state.autocompleteList[index].name
      console.log(state.position.end)
    }
  },
  // 关闭定位错误提示
  [CLOSE_LOCATION_ERROR] (state) {
    state.ismask = false
    state.location = false
  },
  [CLOSE_AUTOCOMPLETELIST] (state) {
    console.log(1234)
    state.autocompleteList = []
    console.log(state.autocompleteList)
  }
}
