function doGet(e) {

  const params = e.parameter;
  const file = params.file;

  // 初回にindexの内容を表示
  if(!file) {
    const htmlOutput = HtmlService.createTemplateFromFile('ondemand1').evaluate();

    htmlOutput
      .setTitle('page1')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);;

    return htmlOutput;
  }
}