<template>
  <div class="box1">
    <div class="mainBox" id="mainBox">
      <div class="bigTitle">
        <h1 class="bigTitleName" v-text="">深圳仓订单进展统计</h1>
        <p>2019-04-11 14:16:00</p>
      </div>
      <div class="mainContent">
        <div class="firstBox">
          <div class="firstLeft">
            <div class="firstLeftTop" @click="toEditDiv('firstLeftTop')" id="firstLeftTop">
              <p class="boxTitle">仓库预警报表</p>
              <div class="boxContent">
                <div class="icoTL"></div>
                <div class="icoTR"></div>
                <div class="icoBL"></div>
                <div class="icoBR"></div>
              </div>
            </div>
            <div class="firstLeftBot">
              <div class="firstLeftBot1" @click="toEditDiv('firstLeftBot1')" id="firstLeftBot1">
                <p class="boxTitle">到货预约信息</p>
                <div class="boxContent">
                  <div class="icoTL"></div>
                  <div class="icoTR"></div>
                  <div class="icoBL"></div>
                  <div class="icoBR"></div>
                </div>
              </div>
              <div class="firstLeftBot2" @click="toEditDiv('firstLeftBot2')" id="firstLeftBot2">
                <p class="boxTitle">快递订单完成情况</p>
                <div class="boxContent">
                  <div class="icoTL"></div>
                  <div class="icoTR"></div>
                  <div class="icoBL"></div>
                  <div class="icoBR"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="firstRight"  @click="toEditDiv('firstRight')" id="firstRight">
            <p class="boxTitle">订单进展情况</p>
            <div class="boxContent"  id="firstRightChart">
              <div class="icoTL"></div>
              <div class="icoTR"></div>
              <div class="icoBL"></div>
              <div class="icoBR"></div>
            </div>
          </div>
        </div>
        <div class="secondBox">
          <div class="secondLeft" @click="toEditDiv('secondLeft')" id="secondLeft">
            <p class="boxTitle">到货预约信息</p>
            <div class="boxContent">
              <div class="icoTL"></div>
              <div class="icoTR"></div>
              <div class="icoBL"></div>
              <div class="icoBR"></div>
            </div>
          </div>
          <div class="secondRight" @click="toEditDiv('secondRight')" id="secondRight">
            <p class="boxTitle">快递订单完成情况</p>
            <div class="boxContent">
              <div class="icoTL"></div>
              <div class="icoTR"></div>
              <div class="icoBL"></div>
              <div class="icoBR"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var data1 = [1, 2, 3, 4, 5, 6, 7];
  var data2 =[500, 480, 200, 250, 350, 186, 440];
  var firstRightObj,firstRightChart,myChart2Obj;
  export default {
    name: 'Box1',
    data(){
      return{
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        firstRightData:{},
      }
    },
    created(){
      /*this.$axios.get('static/json/getTemplate.json').then(response => {
          console.log(response.data.data)
      })*/
    },
    mounted(){
      this.drawLine();
      document.getElementById('routerTbBox').style.height=document.documentElement.clientHeight-(document.documentElement.clientWidth/28)+'px';
      /*window.onresize = function(){
          setTimeout(function () {
              myChart1.resize();
              myChart2.resize();
          },800)


      }*/
      /*this.monitorScreen();*/
    },
    methods:{
      drawLine(){
        //基于准备好的dom，初始化echarts实例
        firstRightChart=this.$echarts.init(document.getElementById('firstRightChart'));
        firstRightObj={
          title:'',
          tooltip: {
            show:false,
          },
          grid: {
            left: '10',
            bottom: '10',
            top: '35',
            right: '10',
            containLabel: true
          },
          xAxis: [{
            name: '',
            min: 0,
            type: 'category', //纵向柱状图，若需要为横向，则此处值为'value'， 下面 yAxis 的type值为'category'
            data: data1,
            nameTextStyle:{
              color:'#cbcbcb'
            },
            axisLine: {
              lineStyle: {
                color: '#363e43'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#cbcbcb'
              }
            },
          }],
          yAxis: [{
            name: '单位',
            min: 0,
            type: 'value',
            splitArea: { show: false },
            splitLine: {
              show: false ,
            },//去除网格线
            nameTextStyle:{
              color:'#cbcbcb',
            },
            axisLine: {
              lineStyle: {
                color: '#cbcbcb'
              }
            },
            axisLine: {
              show: true
            },
            axisTick: {
              show: true
            },
            axisLabel: {
              textStyle: {
                color: '#cbcbcb'
              }
            }
          }],
          series: [{
            name: '销量',
            type: 'bar',
            data: data2,
            barWidth: 15,
            itemStyle: {
              normal: {
                show: false,//鼠标悬停时显示label数据
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#44cbf5'},
                    {offset: 1, color:'#2669c5'}
                  ]
                )
              }
            },
          }]
        };
        myChart2Obj={
          title: { text: '在Vue中使用echarts' },
          tooltip: {
            show: false,
          },
          grid: {
            left: '10%',
            bottom: '10%',
            top: '15%',
            right: '10%',
            containLabel: true
          },

          xAxis: [{
            axisLabel: {
              interval: 0,
              margin: 7,
              color: "#000",
            },
            name: '',
            type: 'category',
            boundaryGap: true,
            nameTextStyle: {
              color: '#fff'
            },
            axisLine: {
              lineStyle: {
                color: '#cccccc',
              },
            },
            axisTick: {
              alignWithLabel: true
            },
            data: data1
          }],

          yAxis: {
            axisLabel: {
              color: "#000",
            },
            name: '',
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: '#cecece',
                type: 'dashed'
              }
            }, //网格线
            axisLine: {
              show: false
            },
            scale: true,
            axisTick: {
              show: false,
            }

          },

          series: {

            label: {
              normal: {
                show: false,

              }
            },
            name: '',
            type: 'line',
            smooth: true,
            data: data2
          }
        };
        // 绘制图表
        firstRightChart.setOption(firstRightObj);
      },
      getFormValue:function(){
        /*let Etitle=document.getElementById('Etitle');*/
        let datas={
          title:{

          }
        };
        datas.title.text=Etitle.value;
        this.toChangData(1,datas)
      },
      toChangData:function( index,datas){
        if(index==1){
          myChart1Obj.title.text=datas.title.text;
          /*this.myChart1.resize()*/
          this.$echarts.init(document.getElementById('TLChart')).clear();
          myChart1.setOption(myChart1Obj);
          /*myChart1Obj.title.text=data.title.text;
          myChart1Obj.xAxis.data=data.xAxis.data;
          myChart1Obj.series.data=data.series.data;*/

        }
      },
      myChartResize:function(){
        setTimeout(function () {
          firstRightChart.resize();
        },600)
      },
      toEditDiv:function (eleId) {
        let theStatus=document.getElementById('routerTarget').style.left
        if(theStatus!='0px'&&theStatus!=0){
          let nowDivBox=document.getElementById(eleId);
          let echartBox=nowDivBox.getElementsByClassName("boxContent")[0];
          if(echartBox.getAttribute("class").indexOf('active')==-1){
            if(document.getElementById('mainBox').getElementsByClassName("active").length>0)
              document.getElementById('mainBox').getElementsByClassName("active")[0].classList.remove('active');
            echartBox.classList.add('active');

          }
        }
      }
    },

    /*props: {
        msg: String
    }*/
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box1{
    height: 100%;
    position: relative;
    border: 2px solid #0db3fd;
    color: white;
    overflow: hidden;

  }
  .mainBox{
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    padding: 0 2%;
    overflow: hidden;
    background: url("/static/image/pageBg.png" ) no-repeat center;
    background-size: 100% 100%;
  }
  .bigTitle{
    height: 12.5%;
    color: #fff;
    background: url("/static/image/titleBg.png" ) no-repeat center;
    background-size: 100% 100%;
    overflow: hidden;
  }
  .bigTitle h1{
    font-size: 1.7rem;
    font-weight: normal;
    margin-top: 1.2%;
    margin-bottom: 0.5%;
  }
  .bigTitle p{
    font-size: 0.7rem;
  }
  .mainContent{
    height: 87.5%;
    margin-top: -2%;
  }
  .firstBox{
    height: 56%;
    width: 100%;
  }
  .firstBox>div{
    float: left;
  }
  .firstLeft{
    width: 66%;
    margin-right: 1.5%;
    height: 100%;
  }
  .firstLeftTop{
    height: 44%;
    width: 100%;
    text-align: left;
  }
  .boxTitle{
    height: 25%;
    color: #3190cb;
    font-size: 1.1rem;
    /*padding-top: 1%;*/
    text-align: left;
    line-height: 2.4rem;

  }
  .boxContent{
    height: 75%;
    width: 100%;
    border: 1px solid #0d1743;
    display: block;
    position: relative;
  }
  .boxContent.active{
    border:2px solid #0db3fd;
    background: rgba(13,179,253,0.2);
  }
  .boxContent.active>div{
    border:none;
  }
  .icoTL{
    position: absolute;
    left:-1px;
    top:-1px;
    width: 1rem;
    height: 1rem;
    border-left:2px solid #0db3fd ;
    border-top:2px solid #0db3fd ;
  }
  .icoTR{
    position: absolute;
    right:-1px;
    top:-1px;
    width: 1rem;
    height: 1rem;
    border-right:2px solid #0db3fd ;
    border-top:2px solid #0db3fd ;
  }
  .icoBL{
    position: absolute;
    left:-1px;
    bottom:-1px;
    width: 1rem;
    height: 1rem;
    border-left:2px solid #0db3fd ;
    border-bottom:2px solid #0db3fd ;
  }
  .icoBR{
    position: absolute;
    right:-1px;
    bottom:-1px;
    width: 1rem;
    height: 1rem;
    border-right:2px solid #0db3fd ;
    border-bottom:2px solid #0db3fd ;
  }
  .firstLeftBot{
    height: 56%;
  }
  .firstLeftBot1{
    width: 40%;
    height: 100%;
    float: left;
    margin-right: 2%;
  }
  .firstLeftBot2{
    width: 58%;
    height: 100%;
    float: left;
  }
  .firstLeftBot .boxTitle{
    height:24% ;
  }
  .firstLeftBot .boxContent{
    height:75% ;
  }
  .firstRight{
    width: 32.5%;
    height: 100%;
  }
  .firstRight .boxTitle{
    height:10.7% ;
  }
  .firstRight .boxContent{
    height:89.2% ;
  }
  .secondBox{
    height:44% ;
  }
  .secondLeft{
    width: 26.4%;
    height: 100%;
    float: left;
    margin-right: 1.5%;
  }
  .secondRight{
    width: 72.1%;
    height: 100%;
    float: left;
  }
  .secondBox .boxTitle{
    height:14% ;
  }
  .secondBox .boxContent{
    height:85% ;
  }
</style>
