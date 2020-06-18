// components/card2/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    _needTitle:{
      type:Boolean,
      value:true
    },
    _title:String,
    _needBasicInfo:{
      type:Boolean,
      value:true
    },
    _basicInfo:{
      type:Array,
      value:[]
    },
    _actionTitle:{
      type:String
    },
    _actionContent:{
      type:String
    },
    _actionTitle2:{
      type:String
    },
    _actionContent2:{
      type:Array
    }
  },
  // options: {
  //   multipleSlots: true // 在组件定义时的选项中启用多slot支持
  // },

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
