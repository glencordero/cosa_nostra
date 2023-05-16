<script>

    import { services } from "../../data/data";

</script>
<h2>Services</h2>
<ul>
    {#each services as service}
      <li>{service}</li>
    {/each}
  </ul>

