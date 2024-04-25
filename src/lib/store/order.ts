import { derived, writable } from "svelte/store";

export const order = writable<{ [key: string]: number }>({});

// #1
export const totalOrderCount = derived(
    order,
    (o) => Object.values(o).reduce((prev, curr)=> prev + curr,0);
);