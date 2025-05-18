<script>
  import MeCard from '$lib/widgets/MeCard.svelte'
  import ResumeCard from '$lib/widgets/ResumeCard.svelte'
  import DonateCard from '$lib/widgets/DonateCard.svelte'
  import OnionMirrorCard from '$lib/widgets/OnionMirrorCard.svelte'
</script>

<div class="flex flex-col gap-4 p-4">
  <div class="flex gap-4">
    <MeCard />
    <div class="flex flex-col gap-4 flex-[593]">
      <ResumeCard />
      <div class="flex gap-4">
        <DonateCard />
        <OnionMirrorCard />
      </div>
    </div>
  </div>
  <div class="flex flex-col px-4"></div>
</div>
