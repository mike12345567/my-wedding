<script>
  export let size
</script>

<div style="width: {size ? size : '30px'}">
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
  <g>
    <g>
      <g>
        <path d="M256,300.138c-34.074,0-61.793,27.719-61.793,61.793s27.719,61.793,61.793,61.793s61.793-27.719,61.793-61.793
          S290.074,300.138,256,300.138z"/>
        <path d="M353.103,194.207c-34.074,0-61.793,27.719-61.793,61.793s27.719,61.793,61.793,61.793s61.793-27.719,61.793-61.793
          S387.178,194.207,353.103,194.207z"/>
        <path d="M450.207,88.276c-34.074,0-61.793,27.719-61.793,61.793s27.719,61.793,61.793,61.793
          c34.075,0,61.793-27.719,61.793-61.793S484.281,88.276,450.207,88.276z"/>
        <path d="M220.69,256c0-34.074-27.719-61.793-61.793-61.793S97.103,221.926,97.103,256s27.719,61.793,61.793,61.793
          S220.69,290.074,220.69,256z"/>
        <path d="M123.586,150.069c0-34.074-27.719-61.793-61.793-61.793S0,115.994,0,150.069s27.719,61.793,61.793,61.793
          S123.586,184.143,123.586,150.069z"/>
      </g>
    </g>
  </g>
  </svg>
</div>

<style>
  @-webkit-keyframes downarrow {
    0% { -webkit-transform: translateY(0); opacity: 0.4 }
    100% { -webkit-transform: translateY(0.4em); opacity: 0.9 }
  }

  svg {
    fill: white;
    display: block;
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 1));
    -webkit-animation: downarrow 1.2s infinite alternate ease-in-out;
  }
  div {
    margin: auto;
  }
</style>