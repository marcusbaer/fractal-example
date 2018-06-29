function renderPreview () {
  document.querySelectorAll('[rel=js-button]').forEach(function(node){
    node.addEventListener('click', function(e){
      console.group('button click');
      console.log(e);
      console.groupEnd('button click');
    })
  });

  document.querySelectorAll('[rel=js-input]').forEach(function(node){
    node.addEventListener('change', function(e){
      console.group('input change');
      console.log(e.target.value);
      console.groupEnd('input change');
    })
  });
}

window.addEventListener('load', renderPreview);
