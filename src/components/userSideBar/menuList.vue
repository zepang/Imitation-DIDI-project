<template>
  <div class="menu-list">
    <ul>
      <li>
        <div class="travel">
          <router-link to="/user/travel">
            <Icon name="address-card"></Icon>
            <span class="text">travel</span>
          </router-link>
        </div>
      </li>
      <li>
        <div class="travel">
          <router-link to="/user/wallet">
            <Icon name="address-card"></Icon>
            <span class="text">wallet</span>
          </router-link>
        </div>
      </li>
      <li>
        <div class="travel">
          <router-link to="/user/setting">
            <Icon name="address-card"></Icon>
            <span class="text">setting</span>
          </router-link>
        </div>
      </li>
      <li>
        <div class="travel">
          <router-link to="/user/feedback">
            <Icon name="address-card"></Icon>
            <span class="text">feedback</span>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon'

export default {
  components: {
    Icon
  }
}
</script>
<style scoped>
a {
  color: #666;
  text-decoration: none;
}

.menu-list ul li {
  padding: 0 16px;
  list-style: none;
}

.menu-list ul li div {
  display: block;
  padding: 17px 0;
  text-decoration: none;
  text-align: left;
}

.menu-list ul li div a {
  font-size: 16px;
}
.fa-icon{
  vertical-align: middle;
}
.menu-list ul li div a .text {
vertical-align: middle;
}
</style>
