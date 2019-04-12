<template>
  <div class="box1">
    <div class="operationBox" id="operationBox">
      <h5 class="formTile">
        <span @click="RetractForm()">收起</span>
        <p>操作表单</p>
      </h5>
      <div class="formMain">

      </div>
      <!--<operationForm></operationForm>-->
      <!--<form id="operationForm">
          标题:<input type="text" name="Etitle" id="Etitle">
          <div class="" @click="this.form.resetFields()">重置</div>
          <div  @click="getFormValue()">确定</div>
      </form>-->
    </div>
    <div class="mainBox" id="mainBox">
      <div class="topBox">
        <div class="leftBox" style="background-color: aliceblue" id="TLChart"></div>
        <div class="rightBox" style="background-color: antiquewhite" id="TRChart" ></div>
      </div>
      <div class="bottomBox">
        <div class="leftBox" style="background-color: beige" id="BLChart"></div>
        <div class="rightBox" style="background-color: cadetblue" id="BRChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
  /*import OperationForm from "@/components/OperationForm";*/
  var data1 = [1, 2, 3, 4, 5, 6, 7];
  var data2 =[500, 480, 200, 250, 350, 186, 440];
  /*var myChartObj=[];var myChart=[];*/
  var myChart1Obj,myChart2Obj,myChart3Obj,myChart4Obj,myChart1,myChart2,myChart3,myChart4;
  export default {
    name: 'Box1',
    /*components: {OperationForm},*/
    data(){
      return{
        mag:'Welcome to Your Vue.js App',
        TLChartData:{},
        TRChartData:{},
        /* myChart1Obj:'' ,
         myChart2Obj:'',myChart3Obj:'',myChart4Obj:'',myChart1:'',myChart2:'',myChart3:'',myChart4:''*/
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
      window.onresize = function(){
        setTimeout(function () {
          myChart1.resize();
          myChart2.resize();
        },800)


      }
      /*this.monitorScreen();*/
    },
    methods:{
      drawLine(){
        //基于准备好的dom，初始化echarts实例
        myChart1=this.$echarts.init(document.getElementById('TLChart'));
        myChart2=this.$echarts.init(document.getElementById('TRChart'));
        myChart3=this.$echarts.init(document.getElementById('BLChart'));
        myChart4=this.$echarts.init(document.getElementById('BRChart'));
        myChart1Obj={
          title: { text: '在Vue中使用echarts' },
          tooltip: {
            show:false,
          },
          xAxis: {
            data: data1
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: data2
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
        myChart3Obj={
          title: { text: '在Vue中使用echarts' },
          tooltip: {
            show:false,
          },
          xAxis: {
            data: data1
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: data2
          }]
        };
        myChart4Obj={
          title: { text: '在Vue中使用echarts' },
          tooltip: {
            show:false,
          },
          xAxis: {
            data: data1
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: data2
          }]
        };
        // 绘制图表
        myChart1.setOption(myChart1Obj);
        myChart2.setOption(myChart2Obj);
        myChart3.setOption(myChart3Obj);
        myChart4.setOption(myChart4Obj);
      },
      getFormValue:function(){
        let Etitle=document.getElementById('Etitle');
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
          myChart1.resize();
          myChart2.resize();
          myChart3.resize();
          myChart4.resize();
        },600)
      },
      RetractForm:function (i) {
        var operationBox=document.getElementById('operationBox');
        var mainBox=document.getElementById('mainBox');
        if(i!=undefined &&i==1){
          mainBox.style.paddingRight='300px';
          operationBox.style.display='block';
        }else{
          mainBox.style.paddingRight='0';
          operationBox.style.display='none';
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
    /*width: 100%;*/
    height: 100%;
    position: relative;
  }
  .mainBox{
    /*padding-right: 300px;*/
    height: 100%;
    transition: all 0.5s;
  }
  .operationBox{
    width: 300px;
    height: 100%;
    position: absolute;
    right: 0;
    overflow-y: hidden;
    transition: all 0.5s;
    display: none;
  }
  .operationBox form{
    height: 100%;
    overflow-y: auto;
  }
  .topBox{
    width: 100%;
    height: 50%;
  }
  .bottomBox{
    width: 100%;
    height: 50%;
  }
  .leftBox,.rightBox{
    height: 100%;
    width: 50%;
    float: left;
  }
  .formTile{
    background-color: black;
    font-style: normal;
    color: white;
    height: 35px;
    line-height: 35px;
    padding: 0 5px;
  }
  .formTile span{
    float: right;
    cursor: pointer;
  }
  .formTile p{
    text-align: left;
  }
</style>
