<template>
  <div>
    <h3 class="h_h3">组建之间项目传值<el-button class="reload_btn" @click="reloadData">恢复原值</el-button></h3>
    <props-child :name='name' :age='age' :msg='msg' :oldMsg='oldMsg' @sendMsg='changeAge'></props-child>
  </div>
</template>

<script>
import propsChild from "./propsChild";
export default {
  name: 'propsEmit',
  components: {
    propsChild
  },
  data() {
    return {
      name: '张某某',
      age: 18,
      msg: {
        height: 175,
        weight: '75kg',
      },
      oldMsg: {
        height: 160,
        weight: '80kg',
      }
    };
  },
  created() {

  },
  methods: {
    changeAge(newAge) {
      this.age = newAge
    },
    changeName(newName) {
      this.name = newName
    },
    reloadData() {
      this.name = '张某某'
      this.age = 18
      this.msg = {
        height: 175,
        weight: '75kg',
      }
      this.oldMsg = {
        height: 160,
        weight: '80kg',
      }
    }
  },
  computed: {
  },
  mounted() {
    this.$on('sendName', function (params) {
      console.log('nieihh')
      this.name = params
    })
  }
};
</script>


<style scoped>
.h_h3 {
  height: 50px;
  line-height: 50px;
}
.reload_btn {
  float: right;

}
</style>
