<template>
  <div class="editDiv" id="editDiv">
    <h3>编辑看板</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="主标题">
        <el-input v-model="form.mainTitle"></el-input>
      </el-form-item>
      <el-form-item label="图表标题">
        <el-input v-model="form.chartTitle"></el-input>
      </el-form-item>
      <el-form-item label="选择数据">
        <el-select v-model="form.data" placeholder="请选择活动区域">
          <el-option label="到货预约信息" value="shanghai"></el-option>
          <el-option label="到货信息" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <!--<el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>-->
      <div class="componentsBox">
        <div class="componentsTitle">可选图表</div>
        <div class="componentsContent">
          <el-row>
            <el-col :span="8"><div class="imgBox"><img src="/static/image/c1.png" alt=""></div></el-col>
            <el-col :span="8"><div class="imgBox"><img src="/static/image/c2.png" alt=""></div></el-col>
            <el-col :span="8"><div class="imgBox"><img src="/static/image/c3.png" alt=""></div></el-col>
            <el-col :span="8"><div class="imgBox"><img src="/static/image/c4.png" alt=""></div></el-col>
            <el-col :span="8"><div class="imgBox"><img src="/static/image/c5.png" alt=""></div></el-col>
          </el-row>
        </div>

      </div>
      <!--<el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>-->
      <!--<el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>-->
    </el-form>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                  mainTitle: '',
                  chartTitle: '',
                  data: '',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
<style>
  #app .editDiv{
    position: absolute;
    right: -18rem;
    top: 0;
    height: 100%;
    width: 18rem;
    transition: all 0.5s;
    background: black;
    color: white;
  }
  .editDiv form{
    background: black;
    padding: 0 1rem;
  }
  .editDiv h3{
    font-weight: normal;
    height:3.2rem ;
    background:#2c333b ;
    color: #3aaff4;
    line-height:3.2rem  ;
    font-size:1.2rem ;
  }
  .editDiv .el-input__inner{
    height: 1.4rem;
    font-size: 0.85rem ;
    border-radius: 0;
    border: 1px solid #2e323b;
    background: #000;
    color: #a3a3a3;
  }
  .editDiv .el-input__icon{
    line-height: 1.4rem;
  }
  .editDiv .el-form-item__label{
    height: 1.4rem;
    line-height: 1.4rem;
    color: white;
    width: 5.5rem !important;
    padding-right: 1rem;
  }
  .editDiv .el-form-item__content{
    height: 1.4rem;
    line-height: 1.4rem;
  }
  .editDiv  .el-form-item{
    margin-top: 1rem;
  }
  .el-scrollbar .el-select-dropdown__item{
    height: 1.4rem;
    font-size: 0.85rem !important;
    line-height: 1.4rem;
  }
  .el-scrollbar .el-select-dropdown__item span{
    color: black;
    font-size: 0.85rem !important;
  }
  .el-form-item{
    margin-bottom: 0;
  }
  .componentsBox{
    margin-top: 1rem;
  }
  .componentsContent{
    width: 100%;
    height:27.9rem ;
    border: 2px solid #2e323b;
  }
  .componentsTitle{
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 0.85rem;
    color: white;
    text-align: left;
    padding-left: 0.5rem;
  }
  .imgBox{
    font-size: 0;
  }
  .imgBox img{
    width: 100%;
    height: auto;
    cursor: pointer;
  }
</style>
