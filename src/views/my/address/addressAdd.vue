<template>
  <div>
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.address"
          name="详细地址"
          label="详细地址"
          placeholder="详细地址"
          :rules="[{ required: true, message: '请填写详细地址' }]"
        />
        <van-row>
          <van-col span="14">
            <van-field
              v-model="form.caller"
              name="联系人"
              label="联系人"
              placeholder="联系人"
              :rules="[{ required: true, message: '请填写联系人' }]"
            />
          </van-col>
          <van-col span="10">
            <van-radio-group v-model="form.sex" direction="horizontal">
              <van-radio name="1">先生</van-radio>
              <van-radio name="2">女士</van-radio>
            </van-radio-group>
          </van-col>
        </van-row>
        <van-field
          v-model="form.phone"
          type="number"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Form, Field, Button } from "vant";
export default {
  components: { Form, Field, Button },
  data() {
    return {
      form: {
        address: "",
        caller: "",
        phone: Number,
        sex: Number,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("2222");
    },
  },
};
</script>

<style lang="less" scoped>
</style>