<script lang="ts">
	import MinusIcon from '$lib/icon/Minusicon.svelte'
	import PlusIcon from '$lib/icon/Plusicon.svelte'
	import { order } from '$lib/store/order';

	export let label: string;
	export let price: number;
	export let menuId: string;
	export let id: string;

	$: compositeId = menuId + '_' + id;
	$: counter = $order [compositeId] ?? 0;

	const add = () => {
		$order[compositeId] = counter + 1;
	};

	const substract = () => {
		if (!$order[compositeId]) return;
		$order[compositeId] = counter - 1;
	};

</script>

<div class="menu-price-row">
	<span class="price-description">{label}</span>
	<span>{price}</span>
	<div class="calculator">
		<button on:click={substract}><MinusIcon /></button>
		<span class="counter">{counter}</span>
		<button on:click={add}><PlusIcon /></button>
	</div>
</div>

<style>
	button {
		background: none;
		border: none;
		display: flex;
	}

	div.menu-price-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
		gap: 8px;
	}

	span.price-description {
		font-size: 12px;
		flex: 1;
		text-align: start;
	}

	span.counter {
		font-size: 12px;
	}
	div.calculator{
		display: flex;
		align-items: center;
		justify-content: end;
	}
</style>