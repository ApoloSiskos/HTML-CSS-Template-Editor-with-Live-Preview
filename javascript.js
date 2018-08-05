$(function() {
  function GetHtml(){
    var html = $('.html').val();
    return html;
  }

  function GetCss(){
    var Css = $('.css').val();
    return Css;
  }

  function renderPreview() {
    var targetp = $('#previewTarget')[0].contentWindow.document;
    targetp.open();
    targetp.close();

    var html = GetHtml();
    var css = GetCss();

    $('body',targetp).append(html);
    $('head', targetp).append('<style>' + css + '</style>');
  }

  $('.innerbox').on("keyup", renderPreview);


  renderPreview();

});

$(document).ready(function(){

$('#Update').click(function(e) {
    console.log($('#thebox1').val());
    if($('#thebox1').val().length > 0) {
        var c = $('#thebox1').val();
        $('.popup1').removeClass().addClass('popup1 '+c).text(c);
    }
    console.log($('#thebox2').val());
    if($('#thebox2').val().length > 0) {
        var c = $('#thebox2').val();
        $('.popup2').removeClass().addClass('popup2 '+c).text(c);
    }
    console.log($('#thebox3').val());
    if($('#thebox3').val().length > 0) {
        var c = $('#thebox3').val();
        $('.popup3').removeClass().addClass('popup3 '+c).text(c);
    }
    console.log($('#thebox4').val());
    if($('#thebox4').val().length > 0) {
        var c = $('#thebox4').val();
        $('.popup4').removeClass().addClass('popup4 '+c).text(c);
    }
    console.log($('#thebox5').val());
    if($('#thebox5').val().length > 0) {
        var c = $('#thebox5').val();
        $('.popup5').removeClass().addClass('popup5 '+c).text(c);
    }
    console.log($('#thebox6').val());
    if($('#thebox6').val().length > 0) {
        var c = $('#thebox6').val();
        $('.popup6').removeClass().addClass('popup6 '+c).text(c);
    }
    console.log($('#thebox7').val());
    if($('#thebox7').val().length > 0) {
        var c = $('#thebox7').val();
        $('.popup7').removeClass().addClass('popup7 '+c).text(c);
    }
    console.log($('#thebox8').val());
    if($('#thebox8').val().length > 0) {
        var c = $('#thebox8').val();
        $('.popup8').removeClass().addClass('popup8 '+c).text(c);
    }
});

$("#expand").click(function() {
    $("#unhide").toggle();
});

	$('#expand').click(function(){
		var $this = $(this);
		$this.toggleClass('#expand');
		if($this.hasClass('#expand')){
			$this.text('Hide The Code');			
		} else {
			$this.text('Show The Code');
		}
	});

 document.getElementById("copyButton1").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget1"));
});

document.getElementById("copyButton2").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget2"));
});

var MyDiv1 = document.getElementById('copyTarget2');
var MyDiv2 = document.getElementById('copyTarget1');

$('#Update').click(function(e) {

  textareahtml.value=$.trim(MyDiv1.innerText) 
  textareacss.value=$.trim(MyDiv2.innerText)

  function GetHtml(){
    var html = $('.html').val();
    return html;
  }

  function GetCss(){
    var Css = $('.css').val();
    return Css;
  }
  
  function renderPreview() {
    var targetp = $('#previewTarget')[0].contentWindow.document;
    targetp.open();
    targetp.close();

    var html = GetHtml();
    var css = GetCss();

    $('body',targetp).append(html);
    $('head', targetp).append('<style>' + css + '</style>');
  }

  $('.innerbox').on("keyup", renderPreview);
  
  renderPreview();
  
});

});

 


function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "textarea";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    
    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}

