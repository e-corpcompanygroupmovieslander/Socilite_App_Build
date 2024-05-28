package com.socilite;

import android.app.Activity;
import android.view.View;

public class NavigationBarHider {
    private Activity activity;

    public NavigationBarHider(Activity activity) {
        this.activity = activity;
    }

    public void hideNavigationBar() {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                View decorView = activity.getWindow().getDecorView();
                int flags = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_IMMERSIVE;
                decorView.setSystemUiVisibility(flags);
            }
        });
    }
}
