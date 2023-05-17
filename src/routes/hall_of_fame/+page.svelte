<script>

    import { legends } from "$lib/data/data";

</script>

<h2>Hall of Fame</h2>

<ul>
    {#each legends as legend}
      <li>{legend}</li>
    {/each}
  </ul>
