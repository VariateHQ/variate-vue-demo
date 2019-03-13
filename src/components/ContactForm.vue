<template>
    <el-row>
        <el-col :span="14" :offset="5">
            <el-form ref="form" :model="form" label-width="250px" label-position="left">
                <el-form-item label="Your name">
                    <el-input v-model="form.name" placeholder="Elon Musk"></el-input>
                </el-form-item>

                <el-form-item label="Your email address">
                    <el-input v-model="form.name" type="email" placeholder="elon@spacex.com"></el-input>
                </el-form-item>

                <el-form-item label="Where did you hear about us?">
                    <el-checkbox-group v-model="form.source">
                        <el-checkbox label="Social Networks" name="source"></el-checkbox>
                        <el-checkbox label="Search Engine" name="source"></el-checkbox>
                        <br>
                        <el-checkbox label="Friend" name="source"></el-checkbox>
                        <el-checkbox label="Other" name="source"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Message">
                    <el-input type="textarea" v-model="form.message" :autosize="{ minRows: 3 }" placeholder="Hello world!"></el-input>
                </el-form-item>
                <el-form-item label="Do you want to receive our newsletter?">
                    <el-switch v-model="form.newsletter"></el-switch>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">Send</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            form: {
                source: null,
                message: '',
                newsletter: false
            }
        };
    }
};
</script>

<style>
    .el-form {
        text-align: left;
    }
    .el-button {
        background-color: #265B8D;
        border-color: #265B8D;
    }
</style>
