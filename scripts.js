    var click = new Audio('click.wav');
    var play = false;

    function sleep(ms) {
      return new Promise(resolve => sleepSetTimeout_ctrl = setTimeout(resolve, ms));
    }

    async function start() {
      if (play){
        return;
      } else {
        play = true;
      }
      while (play){
        click.play();
        await sleep(1000);
      }
    }

    function stop() {
      play = false;
    }
