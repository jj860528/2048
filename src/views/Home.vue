<template>
  <div
    class="index"
    @mousedown="MouseDown"
    @mouseup="MouseUp"
    @touchstart="MouseUp"
    @touchend="MouseDown"
  >
    <div class="container">
      <transition-group name="cell" tag="div" class="fa-content">
        <div v-for="item in gameData" :key="item.id" class="box cell">
          <h1 :style="{backgroundColor: item.color}" :class="item.ani">{{item.num}}</h1>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      gameData: [],
      data: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ],
      reData: [[], [], [], []],
      testData: [[], [], [], []],
      dx: 0,
      dy: 0,
      x: 0,
      y: 0,
      angle: 0,
    };
  },
  created: function() {
  },
  mounted: function() {
    this.addData();
    this.addData();
    const _this = this;
    window.addEventListener("keyup", function(event) {
      switch (event.keyCode) {
        case 37:
          _this.left();
          break;
        case 38:
          _this.up();
          break;
        case 39:
          _this.right();
          break;
        case 40:
          _this.bottom();
          break;
        default:
          console.log("無符合");
      }
    });
  },
  methods: {
    newArr: function() {
      let arr = new Array();
      for (let i = 0; i < 4; i++) {
        let row = new Array();
        for (let j = 0; j < 4; j++) {
          let obj = {
            id: [i].toString() + [j].toString(),
            num: null,
            class: ""
          };
          row.push(obj);
        }
        arr.push(row);
      }
      return arr
    },
    MouseDown: function(event) {
      this.dx = event.clientX;
      this.dy = event.clientY;
    },
    MouseUp: function(event) {
      let ux = event.clientX;
      let uy = event.clientY;
      let dx = this.dx;
      let dy = this.dy;
      /*角度計算*/
      let c1 = (Math.atan2(uy - dy, ux - dx) * 180) / Math.PI;
      let c2 = (Math.atan2(dy - dy, dx + 100 - dx) * 180) / Math.PI;
      c1 = c1 <= -90 ? 360 + c1 : c1;
      c2 = c2 <= -90 ? 360 + c2 : c2;
      let angle = Math.floor(c2 - c1);
      angle = angle < 0 ? angle + 360 : angle;
      this.angle = angle;
      if (angle == 0) {
        return;
      }
      //上滑
      else if (45 < angle && angle < 135) {
        this.up();
      }
      //左滑
      else if (135 < angle && angle < 225) {
        this.left();
      }
      //下滑
      else if (225 < angle && angle < 315) {
        this.bottom();
      }
      //右滑
      else {
        this.right();
      }
    },
    up: function() {
      let data = this.data;
      //反轉
      this.reData = [[], [], [], []];
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          this.reData[j].push(data[i][j]);
        }
      }
      for (let i = 0; i < this.reData.length; i++) {
        for (let j = this.reData[i].length; j > 0; j--) {
          let index = this.reData[i].indexOf(null);
          if (index > -1) {
            this.reData[i].splice(index, 1);
          }
        }
        for (let k = 0; k < this.reData[i].length; k++) {
          if (
            this.isNumber(this.reData[i][k]) &&
            this.isNumber(this.reData[i][k + 1]) &&
            this.reData[i][k] == this.reData[i][k + 1]
          ) {
            this.reData[i][k] = this.reData[i][k] * 2;
            this.reData[i].splice(k + 1, 1);
          }
        }
      }
      this.filling(this.reData);
      //轉回來
      this.testData = [[], [], [], []];
      for (let i = 0; i < this.reData.length; i++) {
        for (let j = 0; j < this.reData[i].length; j++) {
          this.testData[j].push(this.reData[i][j]);
        }
      }
      this.data = this.testData;
      this.addData();

      this.way = "top";
    },
    bottom: function() {
      let data = this.data;
      this.reData = [[], [], [], []];
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          this.reData[j].push(data[i][j]);
        }
      }
      for (let i = 0; i < this.reData.length; i++) {
        for (let j = this.reData[i].length; j > 0; j--) {
          let index = this.reData[i].indexOf(null);
          if (index > -1) {
            this.reData[i].splice(index, 1);
          }
        }
        for (let k = this.reData[i].length; k > 0; k--) {
          if (
            this.isNumber(this.reData[i][k]) &&
            this.isNumber(this.reData[i][k - 1]) &&
            this.reData[i][k] == this.reData[i][k - 1]
          ) {
            this.reData[i][k] = this.reData[i][k] * 2;
            this.reData[i].splice(k - 1, 1);
          }
        }
        //由前面添加null
        for (let n = 0; n < 4; n++) {
          if (this.reData[n].length < 4) {
            let index = 4 - this.reData[n].length;
            for (let j = 0; j < index; j++) {
              this.reData[i].unshift(null);
            }
          }
        }
      }
      this.testData = [[], [], [], []];
      for (let i = 0; i < this.reData.length; i++) {
        for (let j = 0; j < this.reData[i].length; j++) {
          this.testData[j].push(this.reData[i][j]);
        }
      }
      this.data = this.testData;
      this.addData();

      this.way = "bottom";
    },
    left: function() {
      let data = this.data;
      for (let i = 0; i < data.length; i++) {
        for (let j = data[i].length; j > 0; j--) {
          let index = data[i].indexOf(null);
          if (index > -1) {
            data[i].splice(index, 1);
          }
        }
        for (let k = 0; k < data[i].length; k++) {
          if (
            this.isNumber(data[i][k]) &&
            this.isNumber(data[i][k + 1]) &&
            data[i][k] == data[i][k + 1]
          ) {
            data[i][k] = data[i][k] * 2;
            data[i].splice(k + 1, 1);
          }
        }
      }
      //this.addData();
      this.filling(this.data);
      this.addData();
      this.way = "left";
    },
    right: function() {
      let data = this.data;
      for (let i = 0; i < data.length; i++) {
        for (let j = data[i].length; j > 0; j--) {
          let index = data[i].indexOf(null);
          if (index > -1) {
            data[i].splice(index, 1);
          }
        }
        for (let k = data[i].length; k > 0; k--) {
          if (
            this.isNumber(data[i][k]) &&
            this.isNumber(data[i][k - 1]) &&
            data[i][k] == data[i][k - 1]
          ) {
            data[i][k] = data[i][k] * 2;
            data[i].splice(k - 1, 1);
          }
        }
        //由前面添加null
        for (let n = 0; n < 4; n++) {
          if (data[n].length < 4) {
            let index = 4 - data[n].length;
            for (let j = 0; j < index; j++) {
              data[i].unshift(null);
            }
          }
        }
      }
      this.addData();
      this.way = "right";
    },
    isNumber: function(val) {
      const regPos = /^[0-9]+.?[0-9]*/; //判断是否是数字。
      if (regPos.test(val)) {
        return true;
      } else {
        return false;
      }
    },
    addData: function() {
      let i = parseInt(4 * Math.random());
      let j = parseInt(4 * Math.random());
      if (this.data[i][j] == null) {
        this.data[i].splice([j], 1, 2);
      } else {
        this.addData();
      }
    },
    //由後面添加null
    filling: function(x) {
      let data = x;
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 4; j++) {
          if (!data[i][j]) {
            data[i][j] = null;
          }
        }
      }
    }
  },
  watch: {
    data: function(val) {
      let gameData = [];
      for (let i = 0; i < val.length; i++) {
        for (let j = 0; j < val[i].length; j++) {
          let color = "";
          let ani = "";
          if (val[i][j] == null) {
            ani = "";
          } else if (val[i][j] == 2) {
            ani = "newborn";
          } else if (this.way == "right") {
            ani = "right";
          } else if (this.way == "left") {
            ani = "left";
          } else if (this.way == "top") {
            ani = "top";
          } else if (this.way == "bottom") {
            ani = "bottom";
          } else {
            ani = "";
          }
          switch (val[i][j]) {
            case 2:
              color = "#D4EFDF";
              break;
            case 4:
              color = "#A9DFBF";
              break;
            case 8:
              color = "#7dcea0";
              break;
            case 16:
              color = "#52BE80";
              break;
            case 32:
              color = "#27AE60";
              break;
            case 64:
              color = "#229954";
              break;
            case 128:
              color = "#1E8449";
              break;
            case 256:
              color = "#196F3D";
              break;
            case 512:
              color = "#145A32";
              break;
            case 1024:
              color = "#500B3B";
              break;
            case 2048:
              color = "000000";
              break;
          }
          let databox = {
            id: i.toString() + j.toString(),
            num: val[i][j],
            color: color,
            ani: ani
          };
          gameData.push(databox);
        }
      }
      this.gameData = gameData;
      //gameOver
      let splice = [];
      for (let i = 0; i < val.length; i++) {
        for (let j = 0; j < val[i].length; j++) {
          if (val[i][j] == 2048) {
            alert("遊戲結束");
            this.data = [
              [null, null, null, null],
              [null, null, null, null],
              [null, null, null, null],
              [null, null, null, null]
            ];
            this.addData();
          } else if (val[i][j] == null) {
            splice.push(val[i][j]);
          }
        }
      }
      if (splice.length == 0) {
        alert("遊戲結束");
        this.data = [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null]
        ];
        this.addData();
      }
    }
  }
};
</script>
<style leng = "css">
.index {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  /*禁止選取*/
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.test {
  height: 20%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.index .container {
  width: 50vh;
  height: 50vh;
  text-align: center;
}
.index .container:after {
  content: "2048小遊戲";
  color: rgb(226, 170, 48);
  position: absolute;
  font-size: 26px;
  top: -50px;
  left: 0;
  right: 0;
  margin: auto;
}
.fa-content {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
}
.box {
  flex: 0 0 25%;
  box-sizing: border-box;
  border: 3px solid rgb(75, 179, 156);
  height: 25%;
  width: 100%;
  padding: 10px;
  transition: 1s;
  display: inline-block;
}
.box h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7fd8a175;
  border-radius: 15px;
}
.newborn {
  animation: newborn 0.3s ease-in-out;
}
@keyframes newborn {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>