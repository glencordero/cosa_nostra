<script>    
    import {servicesStore} from "../../lib/data/store.js"
    import ServiceOffering from "../../components/ServiceOffering.svelte";
</script>

<h2>Book a Service</h2>

{#each $servicesStore as service, index}
    <ServiceOffering service={service}></ServiceOffering>
{/each}

