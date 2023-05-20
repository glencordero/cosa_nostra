<script>

    import { services } from "../../lib/data/data";

</script>

<h2>Services</h2>

<img src="https://cdn.hswstatic.com/gif/mafia-biz-orig.jpg" width="350" alt="businessmen">

<br><br/>
Proudly providing community services and business ventures since 1861.
<br><br/>

<ul>
    {#each services as service}
      <li>{service}</li>
    {/each}
  </ul>

