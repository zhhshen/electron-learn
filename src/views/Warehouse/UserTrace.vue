<template lang="html">
  <div class="panel-center">
    <ms-subheader>用户路径分析</ms-subheader>
    <div class="ms-form">
      <div class="ms-form-item">
        <label class="ms-form-label">起始事件:</label>
        <div class="ms-form-input-block">
          <ms-form-organization :organization="eventsSource" v-model="seletedEvents"></ms-form-organization>
        </div>
      </div>
      <div class="ms-form-item">
        <label class="ms-form-label">选择页面:</label>
        <div class="ms-form-input-block">
          <ms-form-organization :organization="pagesSource" v-model="seletedPage"></ms-form-organization>
        </div>
      </div>
      <div class="ms-form-item">
        <label class="ms-form-label">时间区间:</label>
        <div class="ms-form-input-block">
          <ms-form-date-picker
              placeholder="请选择开始日期"
              :value="startTime"
              :width="300"
              format="YYYY-MM-DD"
              :readonly="true"
              @input="onStart"></ms-form-date-picker>
            <span class="date-divider">至</span>
            <ms-form-date-picker
            placeholder="请选择结束日期"
            :value="endTime"
            :width="300"
            format="YYYY-MM-DD"
            :readonly="true"
            @input="onEnd"></ms-form-date-picker>
        </div>
      </div>
      <div class="ms-form-item">
        <label class="ms-form-label">输入top值:</label>
        <div class="ms-form-input-block">
          <input type="text" class="ms-form-input-text" placeholder="请输入查询的top值">
        </div>
      </div>
      <div class="ms-actions">
        <div class="ms-row">
          <div class="ms-col-24">
            <span style="float: right">
              <a class="ms-button ms-success" @click="queryTrace">查询</a>
              <a class="ms-button ms-info">下载</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <ms-card>
      <div class="ms-chart">
        <div class="ms-chart-title">用户路径分析</div>
        <div class="ms-chart-content">
          <ms-sankey :others="graphs"></ms-sankey>
        </div>
      </div>
    </ms-card>
  </div>
</template>

<script>
import MsSubheader from '@/components/Subheader'
import MsFormRadio from '@/components/Form/FormRadio'
import MsFormDatePicker from '@/components/Form/FormDatePicker'
import MsFormOrganization from '@/components/Form/FormOrganization'
import MsCard from '@/components/Cards'
import MsSankey from '@/components/Chart/Sankey'
let w = 1000
export default {
  data () {
    return {
      seletedEvents: ['start'],
      eventsSource: [{
        value: 'start',
        label: '起始事件'
      }, {
        value: 'end',
        label: '结束事件'
      }],
      seletedPage: [],
      pagesSource: [],
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
      },
      graphs: {
        width: 1000,
        height: 600,
        graph: {
          nodes: [
            {
                name: "加入购物车",
                value: 3
            },
            {
                name: "下单",
                value: 2
            },
            {
                name:"付款",
                value:2
            },
            {
                name:"加入购物车",
                value:3
            },
            {
                name:"下单",
                value:5
            },
            {
                name:"付款",
                value:3
            },
            {
                name:"收货",
                value:2
            },
            {
                name:"下单",
                value:2
            },
            {
                name:"付款",
                value:8
            },
            {
                name:"申请退款",
                value:1
            },
            {
                name:"收货",
                value:1
            },
            {
                name:"加入购物车",
                value:1
            },
            {
                name:"付款",
                value:4
            },
            {
                name:"收货",
                value:3
            },
            {
                name:"付款",
                value:1
            },
            {
                name:"申请退款",
                value:3
            },
            {
                name:"收货",
                value:7
            },
            {
                name:"退货",
                value:2
            },
            {
                name:"收货",
                value:1
            }
          ],
          links: [
            {
                source:5,
                target:10,
                value:1
            },
            {
                source:2,
                target:6,
                value:2
            },
            {
                source:1,
                target:5,
                value:2
            },
            {
                source:8,
                target:16,
                value:4
            },
            {
                source:3,
                target:8,
                value:2
            },
            {
                source:7,
                target:12,
                value:2
            },
            {
                source:8,
                target:13,
                value:2
            },
            {
                source:3,
                target:7,
                value:1
            },
            {
                source:12,
                target:15,
                value:1
            },
            {
                source:5,
                target:13,
                value:1
            },
            {
                source:13,
                target:17,
                value:1
            },
            {
                source:0,
                target:5,
                value:1
            },
            {
                source:14,
                target:18,
                value:1
            },
            {
                source:11,
                target:14,
                value:1
            },
            {
                source:10,
                target:17,
                value:1
            },
            {
                source:8,
                target:15,
                value:2
            },
            {
                source:0,
                target:4,
                value:2
            },
            {
                source:12,
                target:16,
                value:3
            },
            {
                source:4,
                target:8,
                value:5
            },
            {
                source:5,
                target:9,
                value:1
            }
          ]
        }
      }
    }
  },
  methods: {
    onStart () {
    },
    onEnd () {
    },
    queryTrace () {
      w += 100
      this.graphs = {
        width: w,
        height: this.graphs.height,
        graph: this.graphs.graph
      }
    }
  },
  components: {
    MsSubheader,
    MsFormRadio,
    MsFormOrganization,
    MsFormDatePicker,
    MsCard,
    MsSankey
  }
}
</script>

<style lang="css">
</style>
