<script>
    import Grid from './Grid.svelte';
    import Accordion from './Accordion.svelte';

    import { onMount } from 'svelte';

    export let topic;
    export let title=null;

</script>

<div>
    <div class="header">
        <Grid columns={2} size="small">
            <h1>{title ?? topic.title}</h1>
            <div class="mobile-first"></div>
        </Grid>
    </div>
</div>