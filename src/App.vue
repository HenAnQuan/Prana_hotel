<template>
  <div id="app">
    <transition name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import url(./assets/css/reset.css);
@import url(./assets/css/global.css);
@import url(./assets/css/reset_custom.css);

@media screen and(max-width: 810px) {
  // .hotel-link>.hotel:not(:last-child){margin-right: 10px;}
  p{
    font-size: 12px;
  }
}

/* 
enter-active 定义进入过渡的结束状态
leave-active 定义离开过渡的结束状态
 */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

/* 
enter定义进入过渡的开始状态
 */
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
/* 
leave-to离场动画结束后的状态
 */
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
