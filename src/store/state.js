import {navList,cityList} from './data'
export default {
  // 已定位过
  address:{},
  hasLocation:false,
  startOrEnd:'',
  autocompleteList:[],
  suggestInputValue:'',
  usersidebar:false,
  location: false,
  checkTelephone:false,
  messageConfirm: false,
  islogined:false,
  timeCount: true,
  Interval: null,
  tipsContent: '',
  tips: '',
  telephone: '',
  isTelephoneVal: false,
  isChoosed: true,
  isLogin: false,
  isLocation: false,
  suggest: false,
  ismask: false,
  navListActive: false,
  shadowActive: true,
  position: {},
  Verification: [
    {
      isActive: false,
      VerificationNum: ''
    },
    {
      isActive: false,
      VerificationNum: ''
    },{
      isActive: false,
      VerificationNum: ''
    },{
      isActive: false,
      VerificationNum: ''
    }],
  navList: navList,
  cityList: cityList
}
