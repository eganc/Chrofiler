$(function() {
  // sends message to background script
  chrome.runtime.sendMessage({opened: true}, function(response) {
    console.log(response.example);
  });

  $("iframe").on("load",function() {
  	$("#loader").hide();
  	$(this).show();
  });
});
