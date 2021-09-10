<template>
  <div class="rwd_win_root">
    <div class="header">
      <ul>
        <li>
          <router-link to="/">
            <i class="fas fa-tablet-alt"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/phone">
            <i class="fas fa-mobile-alt"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.logo {
  color:#ffffff;
}
.rwd_win_root .header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;
}
.rwd_win_root .header ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
}
.rwd_win_root .header li {
  color: #ffffff;
  margin: 0 15px;
}
.rwd_win_root .header li a {
    color:#ffffff;
}
.rwd_win_root .header {
  background: #282d41;
  height: 50px;
}
</style>
