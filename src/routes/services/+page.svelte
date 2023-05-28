<script>
  
  import { servicesProvided } from "../../lib/data/data";

</script>

<h2>Services Provided</h2>

<img src="https://cdn.hswstatic.com/gif/mafia-biz-orig.jpg" width="350" alt="businessmen">

<br><br/>
Proudly providing community services and business ventures since 1861.
<br><br/>
Some of our premier services include:

<ul>
    {#each servicesProvided as serviceProvided}
      <li>{serviceProvided}</li>
    {/each}
  </ul>

  <a href=http://localhost:5173/book_now>
    <button id="book">Book Now!</button>
  </a>  
