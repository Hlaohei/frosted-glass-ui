<template>
	<button class="fg-abc-test" :class="{[`fg-abc-test-${type}`]: true}" type="button">
		<slot></slot>
	</button>
</template>

<script>
import { oneOf } from "../../utils/assist.js"

export default {
	name: "FgAbcTest",
	props: {
		type: {
			validator(value) {
				return oneOf(value, [
					"default",
					"primary",
					"info",
					"success",
					"warning",
					"error",
				])
			},
			type: String,
			default: "default",
		},
	},
}
</script>