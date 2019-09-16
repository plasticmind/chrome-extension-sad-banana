InboxSDK.load(2, 'sdk_gmail-apology_0976f5aa46').then(function(sdk){
  /* 
  * For people who put off responding for too long... 
  * https://twitter.com/marcjohns/status/1173434159793967104
  */

  // the SDK has been loaded, now do something with it!
  sdk.Compose.registerComposeViewHandler(function(composeView){
    if(composeView.isReply()) {
      composeView.insertTextIntoBodyAtCursor('Sorry for not getting back to you sooner.');
    }
  });

});