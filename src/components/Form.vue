<template>
  <ElCard class="formData">
    <ElForm :model="formData" :rules="rules" ref="addItemForm" lable-position="top" >
        <ElFormItem label="Type" prop="type">
            <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
                <ElOption lable="Income" value="INCOME" />
                <ElOption lable="Outcome" value="OUTCOME" />
            </ElSelect>
        </ElFormItem>
        <ElFormItem label="Comment" prop="comment">
            <ElInput v-model="formData.comment" />
        </ElFormItem>
        <ElFormItem label="Value" prop="value">
            <ElInput v-model.number="formData.value" @focus="$event.target.select()"/>
        </ElFormItem>
        <ElButton type="primary" @click="onSubmit">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
    export default {
        name: "FormItem",
        data() {
            const checkValue = (rule, value, cb) => {
                if (this.formData.type === "OUTCOME" && value >= 0) {
                    return cb(new Error("Value for outcome type must be less of zero"))
                }
                if (this.formData.type === "INCOME" && value <= 0) {
                    return cb(new Error("Value for income type must be greatest of zero"))
                }
                if (!value) {
                    return cb(new Error("Please input value"))
                }
                if (typeof value !== 'number') {
                    return cb(new Error("Value must be a number"))
                }

                cb()
            }
            return {
                formData: {
                    type: "INCOME",
                    comment: "",
                    value: 0
                },
                rules: {
                    type: [
                        { required: true, message: "Please select type"}
                    ],
                    comment: [
                        { required: true, message: "Please input comment", trigger: "change"}
                    ],
                    value: [
                        { validator: checkValue, required: true, trigger: "blur" }
                    ]
                }
            }
        },
        methods: {
            onSubmit() {
                this.$refs.addItemForm.validate(valid => {
                    if (valid) {
                        this.$emit("submitForm", { ...this.formData})
                        this.$refs.addItemForm.resetFields()
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .formData {
        max-width: 500px;
        margin: auto;
    }
    .type-select {
        width: 100%;
    }
</style>