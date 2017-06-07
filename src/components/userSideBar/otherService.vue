<template>
  <div class="other-service">
    <div class="pull-up">
      <!--<Icon></Icon>-->
    </div>
    <router-link to="">
    <div class="single-icon">
      <div class="border-round red-point">
        <img src="https://static.udache.com/gulfstream/upload/rooster20170106/148368416197740d25a3a9d42ec6ea59efc13ac746463/webapp_img_1483684125519.png">
      </div>
      <p>推荐有奖</p>
    </div>
    </router-link>
    <router-link to="">
    <div class="single-icon">
      <div class="border-round red-point">
        <img src="https://static.udache.com/gulfstream/upload/rooster20170329/1490770166288410d98fb8c6b3baa465d2ffa7238a517/webapp_img_1490770156281.png">
      </div>
      <p>兑换码</p>
    </div>
    </router-link>
    <router-link to="">
    <div class="single-icon">
      <div class="border-round red-point">
        <img src="https://static.udache.com/gulfstream/upload/rooster20170106/1483684241308c5306c73837b0e5ac1610ea8e4b8ae5c/webapp_img_1483684218897.png">
      </div>
      <p>司机招募</p>
    </div>
    </router-link>
  </div>
</template>
<style>
.other-service {
    position: absolute;
    background: #fff;
    /*top: 86px;*/
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 5%;
    text-align: center;
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0);
    z-index: 9;
}
.other-service .single-icon {
    position: relative;
    display: inline-block;
    width: 25%;
    text-align: center;
    margin: 0 7px 20px;
}
.other-service .single-icon .border-round {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 32px;
}
.other-service .single-icon .border-round img {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
    border-radius: 16px;
}
.other-service .single-icon p {
    font-size: 12px;
    color: #333;
    height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>