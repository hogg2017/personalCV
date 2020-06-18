// components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否启用基本信息栏,显示时间等,默认显示
    _needBasicInfo:{
      type:Boolean,
      value:true
    },
    _title:String,
    _basicInfo:Array,
    _contentInfo:{
      type:Array,
      default:[]
    },
    _needTitle:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
