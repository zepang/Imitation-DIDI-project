<template>
<transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp" >
  <div class="list-wrapper" >
    <h1 class="list-title border-bottom-1px">全部服务</h1>
    <ul class="list-content border-bottom-1px">
      <li class="list-item border-right-1px" v-for="item in navList">
        <span class="list-link">
          <img :src="item.iconUrl" width="44px" height="24px" alt="">
          <p class="text"> {{item.name}} </p>
        </span>
      </li>
    </ul>
  </div>
</transition>
</template>
<script>
// import mapState from 'vuex'
export default {
  computed: {
    navList() {
      return this.$store.state.navList
    }
  }
}
</script>
<style scoped>
.navigator .list-wrapper {
  position: fixed;
  left: 0;
  top: 54px;
  z-index: 40;
  width: 100%;
}

.border-bottom-1px,
.border-left-1px,
.border-right-1px,
.border-top-1px {
  position: relative;
}

.navigator .list-wrapper .list-title {
  box-sizing: border-box;
  height: 44px;
  padding-top: 8px;
  text-align: center;
  background: #fff;
  font-size: 16px;
  color: #666;
}

.navigator .list-wrapper .list-title:after {
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.navigator .list-wrapper .list-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #fff;
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

.navigator .list-wrapper .list-content .list-item {
  -ms-flex: 1 1 1e-9px;
  -webkit-box-flex: 1;
  flex: 1;
  -ms-flex-preferred-size: 1e-9px;
  flex-basis: 1e-9px;
  width: 1%;
  height: 105px;
  text-align: center;
}

.navigator .list-wrapper .list-content .list-item .list-link {
  display: block;
  box-sizing: border-box;
  height: 100%;
  padding-top: 28px;
}

.navigator .list-wrapper .list-content .list-item .list-link .icon {
  display: block;
  width: 40px;
  height: 24px;
  margin: 0 auto 16px;
  background-size: 40px 24px;
}

.navigator .list-wrapper .list-content .list-item:after {
  border-right: 1px solid rgba(0, 0, 0, .04);
}

.navigator .list-wrapper .list-content:after {
  border-bottom: 1px solid rgba(0, 0, 0, .04);
}

.navigator .list-wrapper .list-content .list-item .list-link .icon.icon-dache {
  background-image: url(data:image/png;base64,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);
}

.navigator .list-wrapper .list-content .list-item .list-link .icon.icon-driverservice {
  background-image: url(data:image/png;base64,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);
}

.navigator .list-wrapper .list-content .list-item .list-link .icon.icon-gongjiao {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAwCAYAAACG5f33AAAKC0lEQVR4Ae2YBXQkR87HfzUzjhnCjMsUxnVoKcwH333Hd2FmZmZmZgZ7HWZmzjI4y8z2ZNdYunG91tPr1y/rMM5/0inokvSXWuqVmzx+l8gjjzzyyCOPPPJwfAvU1NQUAkUEkOKHxf3Azvy0GAZsx9dBLEIGskCrLlwuKHSCdYATgN1TqdQa6XQa7z25eczK90Umk2Hw4MF06P+p8Prrr5PNZvk2aGtraxKRJ4FjgSmdBfDAgoKCq7t06VK4xhprUFZWxu8WFkDq6+sZPXr0VBHZ4mvLUJCDSstKbxqw/YDCHj17UpoLnoiARHdFR0F/YQ02CgjhjC5ARAeVU11h085j9/WeyarOaA5gtkyf3jeeJk9yL8jbZf6hvEOF9OjenW7duq2BcHYGIQEvvluupK6q7l9Na2sbJx91Ii+//Do4B0huSOmUyspywOGcg/AfRJOwp2vnCPJC2LPz0fyFZ59gh132we45wi8FiOmL9Ng5wilqax5g733+Fp0DOjgqFVx8DINxBsfD99/BX/62r97TQwTzONuP7JaUFLPTkG13zgg+mX3C6T169ChcsqSJffc9lPH1EwBUlU6D0oaGLEZOg6WGzAELIqR0YkFGgGzjVxYAlTKh4IzZCPrsvgiN2awFLRX2I1uAnTW9zkYR4aus2rdAqThxWVpaW/BeylLeC3YJ7e2+XMT/8dXX3ma/A45gXP2XKCxIgoBeOBR6W8B426g6xIrdKtvK3HQ6hCgZon1zAgNY2WsAxNm+nhUjg8OsiFN5fRhE0qoHVI0GnCBDRgUvvPia0KKcePxhW06aNKX4rrsfMX2A01FIlKqEUXCk9IAORlidFkG0PMXKWLxYlqqsC68LtR9BfZIgLyovgvEyjkbcFMQjaoEWJyaDQ4g4KK+YjCDek8oFbs3c9SQwteO64qqbHx82YgwSy4M4YlTEvHII9uws+AiI3rPyRZwps39+4lFIIjikqWa7PkiaUcE0mFnLa7FXi1aAE9OX8F4wRPq9CCngRWA34B1guIgvnTN7Lhplg8PUm5PmtmWolTK2DhknUSZGIyYt4uPUNXNEzGqkx5yzAIk9As3emPMi5oM9ZFPivUecYDCOGCzITvA+BJAeQDvwV6D/Afv+/eNcrxNPZRdXFGYSUbFYYhkSf/Ral2rbAu2iH3gNrjqn/puB+JvRhVCqrhAA5ayawGbxkAV54yuWgfqOduq7MnJ2KU/xHrfxptuo1l2AZ48+8oDJ199415oNixoBYv+iBmWRtqKiQvpvtTkDBm7LttVbUlJSgpBMXHXTYDkg5kMMdlPoDFYRYqYlrOMvfhEEjJMTkgQcmFAi+wWbtLa2UldXtyiDoQrCk1wx27gYwYTU5cJc0Kr7b8GgAdtSXb1FCJpCMwgf90tpW0HZGgGjrhAseCZoE4MAloWxGomJI6IzkxDCaBptreQMttKJeAlZn151tbXPApqBYw8/9L/ivZzxxbBRIViFhYWUl5WwVS7T9t33H5x60rHstONA1uuyLpmCDIgkCOooCQeMl4kIFgTR4JmmsJQwsfySmKzoexaxVsb+ajEZMN1ie4DpicU+Litx92j37YwaNaq5o4SvBiYDlx968L9XKSoqmrH77nsA2laYctE9o7aUktO1rbDijfTGClxtxWWXptYWNkvSsT0tdYlXqHOWlWAwdkm0trVSW1O7yN1+++0ovPddysvKxu+8yy4av2SJJYuoky0rDqczcdb0JoTsbAzWhCZs2LJzhmKvuKVJdLrb2tJKTW3NovTuu++OprwXv0ZxUdHB63Xtas2OQFtbO03NzRRkMtYu2EcF6/OUnc7tD3us19IVVjviQAj3FTpXeXRU+SBnJWxWYtCzsZoxffGPCmYPjI9gpo1Xe3s7I0ePbM548Sh8u69w6TTihSXNTbkD4xj35UTmzJ1PZUU5//i/vdGM8Q7w4BA8YIS0zME7I6+PMOkMSCgrFz2ESDEm471YjWrEJB4yc1JwxCHEnXfYu1JbLHVInEMivySWsYJ4p5HFiwRe7sabbgIr4X4V5eVflFQsx6ix9SHKAEWFhey+8yBWXnEFOocG6lsesK3vj2+vMt5xdHKuvbmZBe+8y8uTJzekdxs4CFrbwuWdq1jS1HTE5Olz0Ke14grLh+Atv2xVXLMukntaXgnYlo9viiRaBUnqTRSpQZKjnratpciZvYSFZNUz6bwLmXbVtRTOnJVO77u4hbLRY8K1sHfPJkRObWoTCgoybL7JBgzcZovQNCPmq2DINmb5/LPP+eCjD/js088ZP34cDY2NVFVV5HQsg9h7KP7ONNaGeLtmzoh1AHGnBOsGTdzMCaIiIjQ2NvDpp5/x4QcfBs4dX5Ybs41UVlTluBaonfj70Clh4zvr7ntpmTkLSacllWloRK91b79nsXg/vcs6a/KXvXdjo369wKWCoMeDeIL6jtF7pk6bSu3Qodx73yM88vDTPFHzAo888jT359Y1tUOZOWMm4gW84BG8V3oe7dPCSjze657HE619ZCtc4IPd6EzgBN6DyiKCciTYMK7TOrjW1HH//Y/yyKNP83iO60MPP8W99zwSfJg5e1awi9cHoL4KXnlAsI9lK27oBpsAhvp//e2p6urqXddZZx1EwPrBMKJtSParRmpzQXrppXdoamoF4igqKmDIkGr23HNPykpLgyzO0ss0R81z9NlIRHAu9t3FPoGJ2N+64ZyLssT6VOuN7OtMw6KGXJBqefnld2lubsNgXHfccRv22msviouLEHHK0NRhfOoPP5qG3DuwaaUV21KSThO7vH9p+vTpIergNUfsKQh4hGHDhvPhh1+E4C2//HKcdNIR3Hb7VR1jWOf2w/3hw0eoTJQRIFEmETIvctyDhEXYRgR7+gASyetNiO4FQbwI4tG12gr7n3/xBR99NCwE7+u4fvDB54wcOVKTxn6C6oFgQ1j1iENYZtAAZlVvNSKT+x+GUCb3fTlhwrm9e/cqq6ioxID1dhDKd968RQDsf8A/6Nu3JwB9c2V/0MH/4vzzrmTu3IW50pkWekj7UGqjIdk+25nkcU00zUiDQSwDQ/nOm9+wVK5z5ixgytSp9O7TBxLNdniQuUA3MXPWTCZPmszsPr2m4eTQTMNaqxMHc9taW4/KlefNONKIJTA2jZpJD0DXrutigG7d1tP74cVdU/NEol9obmnBt7d33j90dsC2k7DCpr2tc67z5s7jgfvvxxB3OJ1JjwXeBx5CeBGh1V188cV8Vzz33NvjgS4nnXykPtWAUaPGhqcKTADW45eBH4VrJhcEvgceBE679ZZ7Q2l067Yu48ZN4LZb7yXCvfwI+CVxdQMG7MH3QAnwItCfJN4BhgCL+RHwS+Ga4nshGBwMnAPUAy1hDGsG/wjB+4VxTWZgHj9+BuaRD2A+gPkA5gOYRz6A+QDmA5gPYB7/AyPo5U4yadGjAAAAAElFTkSuQmCC);
}

.border-bottom-1px:after {
  border-bottom: 1px solid #ebebeb;
  left: 0;
  bottom: 0;
  width: 100%;
  transform-origin: 0 bottom;
}
.list-wrapper{
  animation-duration: 0.3s;
}
.enter-leave-class{
  animation-duration: 1s;
}

</style>