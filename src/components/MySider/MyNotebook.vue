<template>
  <Layout style="background-color: #808695">
    <Row type="flex" justify="center" align="middle">
      <Col span="24">
        <Card style="border-radius: 0vh">
          <p slot="title">Notebook设置</p>
          <p style="height:2.4vh;padding-left:0.4vh;color:white">{{ this.projectname }}</p>
        </Card>
      </Col>
    </Row>
    <br />
    <Row type="flex" justify="center" align="middle">
      <Col :span="24" style="text-align:center">
        <Button type="primary" style="border-radius: 0.4vh; margin: 0 auto; width:200px">更改Kernel...</Button>
      </Col>
    </Row>
    <br />
    <Row type="flex" justify="center" align="middle">
      <Col :span="24" style="text-align:center">
        <Button type="primary" style="border-radius: 0.4vh; margin: 0 auto; width:200px">自动同步设置...</Button>
      </Col>
    </Row>
    <br />
    <Row>
      <Col :span="24" style="text-align:center">
        <Button
          type="primary"
          style="border-radius: 0.4vh; margin: 0 auto; width:200px"
        >共享Notebook...</Button>
      </Col>
    </Row>
  </Layout>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    projectid: {
      type: Number,
      required: true
    },
    projectname: {
      type: String,
      required: true
    },
    isWriteable: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.my-setting .ivu-tabs-bar {
  margin-bottom: 0vh;
}
.ivu-card-head {
  padding: 0.4vh;
}
.ivu-card-body {
  padding: 0vh;
  height: 2.4vh;
  background: #363e4f;
  margin: -0.1vh;
}
.ivu-btn {
  border-radius: 0px;
  color: #f5f7f9;
  background-color: #464e57;
  border-color: #464e57;
  margin: 0px;
  border: 0px solid transparent;
  padding: 6px 16px 6px;
  margin: -3px;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
}
.ivu-btn:hover {
  background-color: dimgrey;
}
.ivu-layout-header {
  height: 36px;
  line-height: 36px;
  padding: 0;
  background-color: #464e57;
  margin: 0;
}
.ivu-tree-title {
  border-radius: 0px;
  color: #fff;
}
</style> 