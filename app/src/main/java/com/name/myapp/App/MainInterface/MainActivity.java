package com.advance_native;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

public class MainActivity extends Activity {
    private WebView webView;
    private WebChromeClientImpl webChromeClientImpl;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webview);
        
        // Ensure proper initialization of WebView
        WebViewInitializer.initializeWebView(this, webView);
        
        // Set up WebViewClient for navigation events
        webView.setWebViewClient(new WebViewClientImpl());
        
        // Initialize WebChromeClient for handling file pickers
        webChromeClientImpl = new WebChromeClientImpl();
        webView.setWebChromeClient(webChromeClientImpl);
        
        // Load the HTML file
        webView.loadUrl("file:///android_asset/App/index.html");
        
        // Add a JavaScript interface for communication between JavaScript and Android
        webView.addJavascriptInterface(new WebAppInterface(this), "Android");
    }

    @Override
    public void onBackPressed() {
        // Handle back button press within WebView
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == WebChromeClientImpl.FILECHOOSER_RESULTCODE) {
            // Retrieve the file upload callback
            ValueCallback<Uri[]> uploadMessage = webChromeClientImpl.getUploadMessage();
            if (uploadMessage != null) {
                Uri[] results = null;
                if (resultCode == Activity.RESULT_OK && data != null) {
                    // Process the selected file URI
                    Uri dataUri = data.getData();
                    if (dataUri != null) {
                        results = new Uri[]{dataUri};
                    }
                }
                // Send the selected file URI to the WebView
                uploadMessage.onReceiveValue(results);
                // Reset the upload message to prevent multiple calls
                webChromeClientImpl.setUploadMessage(null);
            }
        } else {
            super.onActivityResult(requestCode, resultCode, data);
        }
    }
}
