package com.socilite;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.net.Uri;
import android.app.Activity;

public class WebChromeClientImpl extends WebChromeClient {
    private ValueCallback<Uri[]> uploadMessage;
    public static final int FILECHOOSER_RESULTCODE = 100;

    @Override
    public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, FileChooserParams fileChooserParams) {
        if (uploadMessage != null) {
            uploadMessage.onReceiveValue(null);
            uploadMessage = null;
        }
        uploadMessage = filePathCallback;

        Intent intent = fileChooserParams.createIntent();
        try {
            ((Activity) webView.getContext()).startActivityForResult(intent, FILECHOOSER_RESULTCODE);
        } catch (ActivityNotFoundException e) {
            uploadMessage = null;
            return false;
        }
        return true;
    }

    public ValueCallback<Uri[]> getUploadMessage() {
        return uploadMessage;
    }

    public void setUploadMessage(ValueCallback<Uri[]> uploadMessage) {
        this.uploadMessage = uploadMessage;
    }
}
