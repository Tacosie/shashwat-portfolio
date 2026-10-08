$(function(){
  var p=location.pathname.split('/').pop().replace('.html','')||'index';
  $('aside nav a[data-p="'+p+'"]').addClass('active');
  $('#menu').on('click',function(){var o=$('#side').toggleClass('open').hasClass('open');$(this).attr('aria-expanded',o)});
  $('.f').on('click',function(){var f=$(this).data('f');$('.f').removeClass('on');$(this).addClass('on');
    $('.item').each(function(){$(this).toggleClass('hide',f!=='all'&&$(this).data('t')!==f)})});
  $('.copy').on('click',function(){var b=$(this),t=$(b.data('c')).text();
    var done=function(){var o=b.text();b.text('Copied');setTimeout(function(){b.text(o)},1500)};
    if(navigator.clipboard){navigator.clipboard.writeText(t).then(done)}else{var i=$('<input>').val(t).appendTo('body');i.select();document.execCommand('copy');i.remove();done()}});
  $('#cf').on('submit',function(ev){ev.preventDefault();
    var n=$.trim($('#n').val()),e=$.trim($('#e').val()),m=$.trim($('#m').val()),ok=true;
    $('#en').text(n?'':'Enter your name.');$('#ee').text(/^\S+@\S+\.\S+$/.test(e)?'':'Enter a valid email address.');$('#em2').text(m.length>=10?'':'Write at least 10 characters.');
    ok=n&&/^\S+@\S+\.\S+$/.test(e)&&m.length>=10;if(!ok)return;
    $('#out').addClass('ok').text('Opening your email app...');
    location.href='mailto:mittalshashwatam@gmail.com?subject='+encodeURIComponent('Message from '+n)+'&body='+encodeURIComponent(m+'\n\nReply to: '+e);
  });
});
