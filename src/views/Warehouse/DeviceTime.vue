<template lang="html">
  <div class="panel-center">
    <ms-subheader>设备使用时长</ms-subheader>
    <div class="ms-form">
      <div class="ms-form-item">
        <label class="ms-form-label">时间区间:</label>
        <div class="ms-form-input-block">
          <ms-form-date-picker
              placeholder="请选择开始日期"
              :value="startTime"
              :width="240"
              format="YYYY-MM-DD"
              :readonly="true"
              @input="onStart"></ms-form-date-picker>
            <span class="date-divider">至</span>
            <ms-form-date-picker
            placeholder="请选择结束日期"
            :value="endTime"
            :width="240"
            format="YYYY-MM-DD"
            :readonly="true"
            @input="onEnd"></ms-form-date-picker>
        </div>
      </div>
      <div class="ms-form-item">
        <label class="ms-form-label">选择类型:</label>
        <div class="ms-form-input-block">
          <ms-form-radio v-model="type" label="1">按天</ms-form-radio>
          <ms-form-radio v-model="type" label="2">按月</ms-form-radio>
          <ms-form-radio v-model="type" label="3">按年</ms-form-radio>
        </div>
      </div>
      <div class="ms-actions">
        <div class="ms-row">
          <div class="ms-col-24">
            <span style="float: right">
              <a class="ms-button ms-success">查询</a>
              <a class="ms-button ms-info">下载</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <ms-card>
      <div class="ms-chart">
        <div class="ms-chart-title">设备使用时长</div>
        <div class="ms-chart-content">
          <ms-highchart :others="options"></ms-highchart>
        </div>
      </div>
    </ms-card>
    <ms-card>
      <div class="ms-chart">
        <div class="ms-chart-title">设备使用时长</div>
        <div class="ms-chart-content">
          <ms-highchart :others="options"></ms-highchart>
        </div>
      </div>
    </ms-card>
  </div>
</template>

<script>
import MsSubheader from '@/components/Subheader'
import MsFormRadio from '@/components/Form/FormRadio'
import MsFormDatePicker from '@/components/Form/FormDatePicker'
import MsCard from '@/components/Cards'
import MsHighchart from '@/components/Chart/HighChart'
export default {
  data () {
    return {
      startTime: '',
      endTime: '',
      type: '1',
      options: {
        chart: {
          type: 'bar'                           //指定图表的类型，默认是折线图（line）
        },
        title: {
          text: '我的第一个图表'                 //指定图表标题
        },
        xAxis: {
          categories: ['苹果', '香蕉', '橙子']   //指定x轴分组
        },
        yAxis: {
          title: {
            text: 'something'                 //指定y轴的标题
          }
        },
        series: [{                                 //指定数据列
          name: '小明',                          //数据列名
          data: [1, 0, 4]                        //数据
        }, {
          name: '小红',
          data: [5, 7, 3]
        }]
      }
    }
  },
  methods: {
    onStart () {
    },
    onEnd () {
    }
  },
  components: {
    MsSubheader,
    MsFormRadio,
    MsFormDatePicker,
    MsCard,
    MsHighchart
  }
}
</script>

<style lang="css">
</style>
