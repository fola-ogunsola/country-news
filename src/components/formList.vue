<template>
<form>
    <div>
        <input type="text" name="fullname">
        <input type="text" name="email">
        <input type="text" name="phone">
    </div>
</form>
</template>
<script>
export default{
    name:myForm
    data(){
        return {
            fullname: '',
            email:'',
            phone:''
        }
    }
}
</script>