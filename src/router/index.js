import Vue from 'vue'
import Router from 'vue-router'
// 登录页
import Login from "@/components/login/login"
// 主页面
import Home from "@/components/home/home"
// home页面右半部分内容
import homeRigth from "@/components/homeRigth/homeRigth"
import Custom from "@/components/homeRigth/custom"
import Fixed from "@/components/homeRigth/fixed"
//审批测试发布详情
import Approval from "@/components/Approval/approval"
import RuleQuery from "@/components/Approval/ruleQuery"
import TestResult from "@/components/Approval/testResult"
//费用规则管理
import Rules from "@/components/rules/rules"
import CostPZ from "@/components/rules/costPZ"
// 设置页面
import Role from "@/components/setUp/role"
// 因子管理页面
import FactorQuery from "@/components/setUp/factor/factorQuery"
import FactorEdit from "@/components/setUp/factor/factorEdit"

// 规则流程管理
import ProcessRun from "@/components/processRun/processRun"
// 规则执行记录页面
import Record from "@/components/record/record"
//非车险规则管理
import NotCarInsurance from "@/components/notCarInsurance/notCarInsurance"
import Valuation from "@/components/notCarInsurance/configure/valuation"
import Underwriting from "@/components/notCarInsurance/configure/underwriting"
//假数据页面
import Customs from "@/components/homeRigth/customs"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/login"
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[  
        {//右侧主页面
          path : "homeRigth",
          name : "homeRigth",
          component:homeRigth,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        { //自定义规则
          path: 'custom',
          name : "custom",
          component: Custom,
          // meta: { keepAlive: true } //缓存当前页面信息
        },
        { //固定规则
          path: 'fixed',
          name : "fixed",
          component: Fixed,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        {//审核规则
          path: 'approval',
          name : "approval",
          component: Approval,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        {//规则测试查询
          path: 'ruleQuery',
          name : "ruleQuery",
          component: RuleQuery,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        {//规则测试详情
          path: 'testResult',
          name : "testResult",
          component: TestResult,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        {//费用规则查询
          path: 'rules',
          name : "rules",
          component: Rules,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        {//费用规则配置
          path: 'costPZ',
          name : "costPZ",
          component: CostPZ,
          // meta: { keepAlive: true } //缓存当前页面信息
        },
        {//角色权限
          path: 'role',
          name : "role",
          component: Role,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        {//编辑因子
          path: 'factorEdit',
          name : "factorEdit",
          component: FactorEdit,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        {//因子查询
          path: 'factorQuery',
          name : "factorQuery",
          component: FactorQuery,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        { //规则执行记录页面
          path: 'record',
          name : "record",
          component: Record,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        { //保费规则配置
          path: 'valuation',
          name : "valuation",
          component: Valuation,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        { //核保规则配置
          path: 'underwriting/:id/:name',
          // path: 'underwriting',
          name : "underwriting",
          component: Underwriting,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        { //规则流程管理
          path: 'processRun',
          name : "processRun",
          component: ProcessRun,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        { //非车险管理
          path: 'notCarInsurance',
          name : "notCarInsurance",
          component: NotCarInsurance,
          meta: { keepAlive: true } //缓存当前页面信息
        },
        { //假数据页面
          path: 'customs',
          name : "customs",
          component: Customs,
          // meta: { keepAlive: true } //缓存当前页面信息
        },
      ]
    }
  ]
})
