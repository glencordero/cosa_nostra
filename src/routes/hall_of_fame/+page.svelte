<script>
    import { legends } from "$lib/data/data";
</script>

<h2>
  <div>La Cosa Nostra</div>
  <div>Hall of Fame Inductees</div>
</h2>

<img src="https://m.media-amazon.com/images/M/MV5BMWZiZjVkYTMtNzE1Zi00NGUyLWJhNWUtYTI0YTUyMmRiYjk0XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg" width="500" alt="moblegends">
  <ul>
    {#each legends as legend, index}
      <li><a href={`/hall_of_fame/${[index]}`}>{legend.name}</a></li>
    {/each}
  </ul>

<p>Congratulazioni signori!</p>
<p> Who will we induct next year?</p>
  