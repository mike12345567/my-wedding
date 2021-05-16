<script>
  import { config } from "../common/config"
  import { getTimeUntil, formatDate } from "../common/date"
  import { Images } from "../common/images"
  import Header from "../components/Header"

  const date = config.getDate()
  const ukDate = new Date(config.getDate()).toString()
  const colors = config.getColors()

  $: daysUntil = date ? getTimeUntil(date) : "No date provided"
</script>

{@html `<style ✂prettier:content✂="CiAgICBAZm9udC1mYWNlIHsKICAgICAgZm9udC1mYW1pbHk6ICR7Y29uZmlnLmdldFByaW1hcnlGb250KCkubmFtZX07CiAgICAgIHNyYzogdXJsKCR7Y29uZmlnLmdldFByaW1hcnlGb250KCkudXJsfSk7CiAgICB9CiAgICBAZm9udC1mYWNlIHsKICAgICAgZm9udC1mYW1pbHk6ICR7Y29uZmlnLmdldFNlY29uZGFyeUZvbnQoKS5uYW1lfTsKICAgICAgc3JjOiB1cmwoJHtjb25maWcuZ2V0U2Vjb25kYXJ5Rm9udCgpLnVybH0pOwogICAgfQo=" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂=""></style>`}

<main
  style="--primary-color: {colors.primary};
 --text-color: {colors.text};
 --primary-font: {config.getPrimaryFont().name};
 --secondary-font: {config.getSecondaryFont().name}"
>
  <div class="body">
    <div class="header">
      <img src={Images.LOGO} height="100%" alt="floral heart" />
    </div>
    <div class="textWrapper">
      <h1>
        {config.getHerName()} & {config.getHisName()} are getting married!
      </h1>
      <p>
        Its happening at {config.getAddress().name} in {config.getAddress()
          .town}
      </p>
      <p>{formatDate(date, "DD/MM/YYYY")}</p>
    </div>
    <div class="venue">
      <img src={Images.VENUE_LRG} width="100%" alt="venue" />
    </div>
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    color: var(--text-color);
    overflow: hidden;
  }

  .body {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    overflow: hidden;
  }

  h1 {
    font-size: 4em;
    font-weight: 100;
  }

  .header {
    width: 100%;
    height: 10%;
  }

  .header img {
    left: 0;
    width: 128px;
    margin-left: 30px;
    margin-top: 10px;
    float: left;
  }

  .textWrapper {
    font-family: var(--primary-font), sans-serif;
    top: 15%;
    width: 40%;
    left: 50%;
    transform: translate(-50%, 0);
    position: absolute;
    z-index: 1;
  }

  .textWrapper p {
    font-size: 1.6em;
  }

  .venue {
    opacity: 0.7;
    position: fixed;
    bottom: -20vw;
    width: 104%;
    left: -2%;
  }

  @media only screen and (max-width: 640px) {
    main {
      max-width: none;
    }

    .venue {
      top: auto;
      bottom: -60px;
      width: 120%;
      left: -10%;
    }

    .textWrapper {
      width: 100%;
      top: 15%;
    }

    .header img {
      margin-left: 0;
      float: none;
    }
  }
</style>
