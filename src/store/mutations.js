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
  CHOOSER_ADDRESS = 'CHOOSER_ADDRESS'

export default {
  [TELEPHONE_INPUT](state) {
    console.log(123)
    if (state.islogined) {
      state.usersidebar = true
    } else {
      state.checkTelephone = true
      state.ismask = true
    }

  },
  [CLOSE_MASK](state) {
    state.checkTelephone = false
    state.messageConfirm = false
    state.ismask = false
  },
  [SWITCH_NAV](state, index) {
    state.navList.forEach(function (item) {
      item.isActive = false
    });
    state.navList[index].isActive = true
  },
  [SWITCH_NAVLIST](state) {
    state.navListActive = state.navListActive ? false : true
    state.shadowActive = state.shadowActive ? false : true
  },
  [SHOW_SUGGEST](state, key) {
    // console.log(state)
    state.startOrEnd = key
    console.log(state.startOrEnd)
    state.suggest = state.suggest ? false : true
    console.log(state.suggest)
  },
  [CLOSE_SUGGEST](state) {
    state.suggest = state.suggest ? false : true
    state.isChoosed = true
  },
  [SWITCH_INPUT_CITY](state) {
    state.isChoosed = !state.isChoosed
  },
  [CHOOSE_CITY_NAME](state, index) {
    // console.log(state.cityList[index.i].cityName[index.j])
    state.position.city = state.cityList[index.i].cityName[index.j]
    state.isChoosed = true
    console.log(state.position.city)
  },
  [CHECK_TELEPHONE](state, telephone) {
    if (telephone) {
      console.log(telephone)
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
  [TOMESSAGECONFIRM](state, telephone) {
    // console.log(1)
    state.checkTelephone = false
    state.messageConfirm = true
  },
  [SAVE_TELEPHONE](state) {
    console.log()
    localStorage.setItem('telephone', state.telephone)
    state.islogined = true
    console.log(localStorage.getItem('telephone'))
  },
  [GET_TELEPHONE](state) {
    // console.log(localStorage.getItem('telephone'))
    state.islogined = localStorage.getItem('telephone') ? true : false
    state.usersidebar = localStorage.getItem('telephone') ? true : false
  },
  [CLOSE_USERSIDEBAR](state) {
    state.usersidebar = !state.usersidebar
    console.log(state.usersidebar)
  },
  [SET_POSITON](state, result) {
    const position = {
      address: result.aois[0].name,
      city: result.addressComponent.city
    }
    state.position = position
  },
  [CHOOSER_ADDRESS](state, index){
    console.log(state.startOrEnd)
    if(state.startOnEnd == 'getOn'){
      state.position.start = state.autocompleteList[index].name
    }else{
      state.position.end = state.autocompleteList[index].name
      console.log(state.position.end)
    }
  }
}
