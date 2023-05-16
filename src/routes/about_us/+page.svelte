<script>
    export let data
    const {jobOpportunities} = data
</script>

<h2>About Us</h2>
  
  <ul>
    Job opportunities abound for the industrious applicant, including...
    {#each jobOpportunities as job}
      <li>{job}</li>
    {/each}
  </ul>
  