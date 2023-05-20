<script>
    export let data
    const {jobOpportunities} = data
</script>

<h2>About Us</h2>

<img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL21hZmlhLXVwZGF0ZS0xMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==" width="500" alt="jobs">
  
  <ul>
    Job opportunities abound for the industrious applicant, including...
    <br><br/>
    {#each jobOpportunities as job}
      <li>{job}</li>
    {/each}
  </ul>
  