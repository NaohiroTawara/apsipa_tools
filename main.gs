function doGet(e) {
  const session = e.parameter.session;

  var htmlOutput = HtmlService.createTemplateFromFile('ondemand1')
  
  htmlOutput.session = session
  htmlOutput = htmlOutput.evaluate();
  htmlOutput
  .setTitle('Ondemand session 1')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setSandboxMode(HtmlService.SandboxMode.IFRAME)
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return htmlOutput;

}