<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<br />

		<fg-abc-test>基础</fg-abc-test>
		<fg-abc-test type="primary">正常</fg-abc-test>
		<fg-abc-test type="info">信息</fg-abc-test>
		<fg-abc-test type="success">成功</fg-abc-test>
		<fg-abc-test type="warning">警告</fg-abc-test>
		<fg-abc-test type="error">错误</fg-abc-test>

		<fg-bcd-test></fg-bcd-test>

	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Home",
	components: {},
}
</script>
