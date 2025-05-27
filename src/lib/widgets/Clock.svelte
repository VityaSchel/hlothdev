<script lang="ts">
  const hours = 12
  const minutesBlock = 5
  const minuteRotation = 360 / (hours * minutesBlock)
  const hourRotation = 360 / hours
  const secondRotation = minuteRotation

  const timezone = 'UTC+4'
  const time = {
    hours: 0,
    minutes: 54,
    seconds: 0
  }
</script>

<div class="aspect-square h-auto w-full rounded-full bg-white p-[2.1%] text-[#1c1c1e]">
  <div class="relative h-full w-full">
    {#snippet tick(rotation: number)}
      <div class="border-aligned-element tick" style="--rotate: {rotation}deg;">
        <span></span>
      </div>
    {/snippet}
    {#snippet hour(rotation: number, hour: string)}
      <div class="border-aligned-element hour" style="--rotate: {rotation}deg;">
        <span style="transform: rotate({360 - rotation}deg);">
          {hour}
        </span>
      </div>
    {/snippet}
    {#each { length: hours }, i}
      {@render hour(i * hourRotation + hourRotation, String(i + 1))}
    {/each}
    <div
      class="center-aligned-element arrow h-[27.73%]"
      style="--rotate: {hourRotation * (time.hours % 12)}deg;"
    >
      <span class="bottom-2 h-[25px] w-[5px]"></span>
      <span class="bottom-0 h-3 w-[2px]"></span>
    </div>
    <div class="center-aligned-element arrow" style="--rotate: {minuteRotation * time.minutes}deg;">
      <span class="bottom-2 h-[47px] w-[5px]"></span>
      <span class="bottom-0 h-3 w-[2px]"></span>
    </div>
    <div
      class="center-aligned-element arrow seconds"
      style="--rotate: {secondRotation * time.seconds}deg;"
    >
      <span class="bottom-0 h-[57px] w-[0.5px]"></span>
      <span class="top-0 h-2 w-[0.5px]"></span>
    </div>
    {#each { length: hours }, i}
      {#each { length: minutesBlock }, j}
        {@render tick(minuteRotation * (i * minutesBlock + j))}
      {/each}
    {/each}
    <div class="dot h-[7px] w-[7px] bg-[#1c1c1e]"></div>
    <div class="dot h-[4px] w-[4px] bg-[#ff9500]"></div>
    <div class="dot top h-[2px] w-[2px] bg-white"></div>
    <span class="left-1/2 -translate-x-1/2 absolute top-2/3 -translate-y-1/2 text-[10px] font-semibold">{timezone}</span>
  </div>
</div>

<style lang="scss">
  .center-aligned-element {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    display: flex;
    transform-origin: center;
    transform: translate(-50%, -50%) rotate(var(--rotate));
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .border-aligned-element {
    position: absolute;
    top: 0;
    left: 50%;
    display: flex;
    height: 50%;
    transform-origin: bottom;
    transform: translateX(-50%) rotate(var(--rotate));
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
  }

  .arrow {
    width: 0px;
    height: 0px;

    span {
      background-color: #1c1c1e;
      border-radius: calc(infinity * 1px);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .arrow.seconds {
    z-index: 3;

    span {
      background-color: #ff9500;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .tick {
    width: 1.5px;

    span {
      height: 4px;
      width: 1.5px;
      border-radius: calc(infinity * 1px);
      background: #b0b0b0;
    }

    &:nth-child(5n + 1 of .tick) span {
      background: #1c1c1e;
    }
  }

  .hour {
    width: 0px;
    padding-top: 4px;

    span {
      border-radius: calc(infinity * 1px);
      text-align: center;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: -0.05em;
      user-select: none;
    }
  }

  .dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-radius: calc(infinity * 1px);

    &.top {
      z-index: 5;
    }
  }
</style>
