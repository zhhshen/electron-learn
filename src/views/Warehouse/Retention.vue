<template lang="html">
  <div class="panel-center">
    <ms-subheader>用户留存分析</ms-subheader>
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
      <div class="ms-form-item">
        <label class="ms-form-label">渠道:</label>
        <div class="ms-form-input-block">
          <ms-form-organization :organization="channelSource" v-model="seletedChannel"></ms-form-organization>
        </div>
      </div>
      <div class="ms-form-item">
        <label class="ms-form-label">省市:</label>
        <div class="ms-form-input-block">
          <ms-form-organization :organization="provincesSource" v-model="seletedProvinces"></ms-form-organization>
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
      <ms-table :columns="columns" :data="data"></ms-table>
    </ms-card>
  </div>
</template>

<script>
import MsSubheader from '@/components/Subheader'
import MsFormRadio from '@/components/Form/FormRadio'
import MsFormDatePicker from '@/components/Form/FormDatePicker'
import MsFormOrganization from '@/components/Form/FormOrganization'
import MsCard from '@/components/Cards'
import MsHighchart from '@/components/Chart/HighChart'
import MsTable from '@/components/Table/tableMultiple'
export default {
  data () {
    return {
      startTime: '',
      endTime: '',
      type: '1',
      seletedChannel: [],
      seletedProvinces: [],
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
      },
      channelSource: [],
      provincesSource: [],
      columns: [
        {
          title: '首次使用时间',
          key: 'firstTime',
          row: 2,
          col: 1
        },
        {
          title: '新增设备',
          key: 'new',
          row: 1,
          col: 2,
          nodes: [{
            title: '1天后',
            key: '1d'
          }]
        },
        {
          title: '留存率',
          key: 'trace',
          row: 1,
          col: 7,
          nodes: [{
            title: '1天后',
            key: '1d'
          }, {
            title: '2天后',
            key: '2d'
          }, {
            title: '3天后',
            key: '3d'
          }, {
            title: '4天后',
            key: '4d'
          }, {
            title: '5天后',
            key: '5d'
          }, {
            title: '6天后',
            key: '6d'
          }]
        }
      ],
      data: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03',
          address1: '北京市朝阳区芍药居',
          date1: '2016-10-03',
          address2: '北京市朝阳区芍药居',
          date2: '2016-10-03'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗',
          date: '2016-10-01',
          address1: '北京市朝阳区芍药居',
          date1: '2016-10-03',
          address2: '北京市朝阳区芍药居',
          date2: '2016-10-03'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道',
          date: '2016-10-02',
          address1: '北京市朝阳区芍药居',
          date1: '2016-10-03',
          address2: '北京市朝阳区芍药居',
          date2: '2016-10-03'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道',
          date: '2016-10-04',
          address1: '北京市朝阳区芍药居',
          date1: '2016-10-03',
          address2: '北京市朝阳区芍药居',
          date2: '2016-10-03'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道',
          date: '2016-10-02',
          address1: '北京市朝阳区芍药居',
          date1: '2016-10-03',
          address2: '北京市朝阳区芍药居',
          date2: '2016-10-03'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道',
          date: '2016-10-04',
          address1: '北京市朝阳区芍药居',
          date1: '2016-10-03',
          address2: '北京市朝阳区芍药居',
          date2: '2016-10-03'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道',
          date: '2016-10-02',
          address1: '北京市朝阳区芍药居',
          date1: '2016-10-03',
          address2: '北京市朝阳区芍药居',
          date2: '2016-10-03'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道',
          date: '2016-10-04',
          address1: '北京市朝阳区芍药居',
          date1: '2016-10-03',
          address2: '北京市朝阳区芍药居',
          date2: '2016-10-03'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道',
          date: '2016-10-02',
          address1: '北京市朝阳区芍药居',
          date1: '2016-10-03',
          address2: '北京市朝阳区芍药居',
          date2: '2016-10-03'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道',
          date: '2016-10-04',
          address1: '北京市朝阳区芍药居',
          date1: '2016-10-03',
          address2: '北京市朝阳区芍药居',
          date2: '2016-10-03'
        }
      ]
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
    MsFormOrganization,
    MsCard,
    MsHighchart,
    MsTable
  }
}
</script>

<style lang="css">
</style>
