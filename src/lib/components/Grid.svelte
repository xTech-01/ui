<script>
    export let columns = 2;
    export let rowGap = "1.5rem";
    export let wrapMode = "half";
    export let alignItems = "flex-start";
    export let size = "medium";
</script>

<div
    class="grid"
    class:small={size === "small"}
    class:medium={size === "medium"}
    class:large={size === "large"}
    style="
        --columns: {columns};
        --row-gap: {rowGap};
        --wrpped-columns: {wrapMode === 'single' ? 1 : (wrapMode === 'half' ? Math.ceil(columns / 2) : columns)};
        --align-items: {alignItems};
    ">
    <slot></slot>
</div>

<style>
    .grid {
        grid-row-gap:var(--row-gap);
    }
</style>