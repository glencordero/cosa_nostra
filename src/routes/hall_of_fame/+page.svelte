<script>
    import { legends } from "$lib/data/data";
</script>

<h2>
  <div>La Cosa Nostra</div>
  <div>Hall of Fame Inductees</div>
</h2>

<!-- <ul>
    {#each legends as legend}
      <li><a href={`/hall_of_fame/${legend.name}`}>{legend.name}</a></li>
    {/each}
</ul> -->

  <ul>
    {#each legends as legend, index}
      <li><a href={`/hall_of_fame/${[index]}`}>{legend.name}</a></li>
    {/each}
  </ul>
  