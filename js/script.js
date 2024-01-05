window.onscroll = function() {
  var botaoVoltarAoTopo = document.getElementById('btnVoltarAoTopo');
  
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    botaoVoltarAoTopo.classList.remove('d-none');

  } else {
    botaoVoltarAoTopo.classList.add('d-none');
  }
};

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

 