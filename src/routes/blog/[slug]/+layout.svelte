<script lang="ts">
    let {data, children} = $props();
</script>

<div class="more">
    <main>
        {@render children()}
    </main>

    <aside>
        <h3>More posts</h3>
        <ul>
            {#each data.summaries as {slug, title}}
                <li>
                    <a href="/blog/{slug}">{title}</a>
                </li>
            {/each}
        </ul>
    </aside>
</div>


<style>
    @media (min-width: 640px) {
        .more {
            display: grid;
            gap: 2em;
            grid-template-columns: 1fr 16em;
        }
    }
</style>