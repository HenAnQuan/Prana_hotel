<template>
  <div class="booking">
    <!-- 酒店预订 -->
    <div class="main-info">
      <div class="booking-hotel">
        <h2>预定酒店</h2>
        <span class="booking-address">
          <img
            src="../assets/icon/address1.png"
            alt=""
            width="21px"
            height="21px"
          />
          <p>浙江省舟山市塘头村</p>
        </span>
      </div>
      <div class="booking-info">
        <h2>舟山璞纳酒店</h2>
        <!-- <input type="text" placeholder="1间客房" /> -->
        <div style="position: relative" class="downMenu room">
          <div class="rooms" @click.stop="openMenu($event)">1间客房</div>
          <div class="rooms-down">
            <ul class="rooms-select">
              <li>1间客房</li>
              <li>2间客房</li>
              <li>3间客房</li>
            </ul>
          </div>
        </div>
        <div style="position: relative" class="downMenu customer">
          <div class="rooms" @click.stop="openMenu($event)">1位客人</div>
          <div class="rooms-down">
            <ul class="rooms-select">
              <li>1位客人</li>
              <li>2位客人</li>
              <li>3位客人</li>
            </ul>
          </div>
        </div>
        <div style="position: relative" class="downMenu datetime">
          <!-- <div class="rooms time" @click.stop="openMenu($event)">2020年12月30日 - 2021年1月1日</div>
            <div class="rooms-down">
                <ul class="rooms-select">
                    <li>1位客人</li>
                    <li>2位客人</li>
                    <li>3位客人</li>
                </ul>
            </div> -->
          <!-- 使用 element-ui 完成时间选择器 -->
          <div>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width:250px"
            >
            </el-date-picker>
          </div>
        </div>
        <div class="bd-reserve">
          <button class="bt-reserve">预定</button>
        </div>
        <a href="" class="order">查看现有订单</a>
        <a href="" class="phone">电话预约</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
    };
  },
  methods: {
    // 封装酒店预定区域中下拉菜单的功能
    openMenu($event) {
      console.log($event.target);
      let rooms = $event.target;
      let roomsDown = rooms.nextSibling;
      let roomsSelect = roomsDown.querySelectorAll(".rooms-select>li");
      console.log(roomsDown.style.display);
      // if(roomsDown.style.display!="none") return;
      // 下拉菜单 预定酒店房间数量
      // var rooms = document.getElementById("rooms");
      // var roomsDown = document.getElementById("rooms-down");
      // var roomsSelect = document.querySelectorAll(".rooms-select>li");
      console.log(roomsSelect);
      roomsDown.style.display = "block";
      for (var i = 0; i < roomsSelect.length; i++) {
        roomsSelect[i].onclick = function () {
          rooms.innerHTML = this.innerHTML;
          console.log(this.innerHTML);
          roomsDown.style.display = "none";
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// 酒店预定部分样式
.booking {
  width: 100%;
  margin-top: -4px;
  box-sizing: border-box;
  // padding: 55px 280px 55px 280px;
  padding: 55px 240px;
  color: white;
  background-color: #1c1c1c;
}
.main-info{

}
.booking h2 {
  font-size: 16px;
}
.booking-hotel {
  display: flex;
  align-items: center;
}
.booking-address {
  margin-left: 84px;
  display: flex;
  align-items: center;
}
.booking-address p {
  font-size: 16px;
  display: inline-block;
  align-self: center;
}
.booking-address img {
  margin-right: 8px;
}
.booking-info {
  display: flex;
  margin-top: 31px;
  // align-items: center;
  justify-content: space-between;
}
.downMenu {
  position: relative;
}
// 酒店预定部分样式  房间预定数量下拉列表样式
.rooms {
  color: white;
  width: 70px;
  height: 30px;
  border-bottom: 1px solid white;
  background-color: #1c1c1c;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  cursor: pointer;
  position: relative;
}
.rooms-down {
  border: 1px solid white;
  width: 70px;
  // margin-left: 5px;
  display: none;
  position: absolute;
  top: 50px;
  left: 0px;
}
.rooms-select {
  padding: 0;
  margin: 0;
}
.rooms-select > li {
  list-style: none;
  font-size: 14px;
  text-align: center;
  height: 39px;
  line-height: 39px;
  // color: white;
  // background-color: rgba(64,64,64,.6);
  background-color: white;
  color: #1c1c1c;
  cursor: pointer;
}
li:hover {
  // background-color: rgba(64,64,64,.9);
  background-color: #1c1c1c;
  color: white;
}

.customer {
  // margin-left: 60px;
}
.datetime > .time {
  width: 443px;
  margin-left: 58px;
}
.bd-reserve {
  width: 136px;
  height: 40px;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid white;
  // margin-left: 91px;
}
.bt-reserve {
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  font-size: 14px;
  color: #1c1c1c;
  background-color: white;
}

// 以下修改elment-ui 的时间选择器默认样式
#el-date-picker{width: 250px;}
.el-range-editor {
  // margin-left: 60px;
  border-radius: 0;
  widows: 250px;
  font-size: 14px;
}
// .el-range-editor{
//   margin-left: 25px;
//   background-color: #1c1c1c;
//   border: none;
//   border-radius: 0;
//   border-bottom: 1px solid white;
//   color: white !important;
// }
// .el-date-editor span{
//   color: white !important;
// }
// 以上修改elment-ui 的时间选择器默认样式

.order,.phone {
  font-size: 14px;
  color: #96b1ad;
  line-height: 40px;
}
// 酒店预定部分样式
.booking-info h2 {
  line-height: 40px;
}

@media screen and(max-width: 1440px) {.booking{padding: 55px 120px;}.bd-reserve{width: 100px;}}
@media screen and(max-width: 1024px) {.booking{padding: 55px 60px;}}
@media screen and(max-width: 992px) {.booking{padding: 55px 20px;}}








</style>