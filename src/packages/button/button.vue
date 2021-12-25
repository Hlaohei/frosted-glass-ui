<template>
	<button class="fg-button" :class="{[`fg-button-${type}`]: true}" type="button">
		<slot></slot>
	</button>
</template>

<script>
import { oneOf } from "../../utils/assist.js"

export default {
	name: "FgButton",
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

