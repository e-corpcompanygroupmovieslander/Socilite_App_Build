package com.socilite;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Build;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class WebViewInitializer {

    @SuppressLint("SetJavaScriptEnabled")
    public static void initializeWebView(Activity activity, WebView webView) {
        // Adjust window settings for newer Android versions
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            activity.getWindow().setDecorFitsSystemWindows(false);
            activity.getWindow().setStatusBarContrastEnforced(false);
        } else {
            activity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        }

        // Get settings for the WebView
        WebSettings webSettings = webView.getSettings();

        // Enable JavaScript
        webSettings.setJavaScriptEnabled(true);

        // Disable built-in zoom controls
        webSettings.setBuiltInZoomControls(false);
        webSettings.setDisplayZoomControls(false);

        // Enable caching
        webSettings.setAppCacheEnabled(true);
        webSettings.setCacheMode(WebSettings.LOAD_DEFAULT);

        // Allow media playback without user gesture
        webSettings.setMediaPlaybackRequiresUserGesture(false);

        // Enable DOM storage
        webSettings.setDomStorageEnabled(true);

        // Allow access to file system
        webSettings.setAllowFileAccess(true);
    }
}
