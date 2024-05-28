package com.socilite;

import android.app.Activity;
import android.view.View;

public class NavigationBarShower {
    private Activity activity;

    public NavigationBarShower(Activity activity) {
        this.activity = activity;
    }

    public void showNavigationBar() {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                View decorView = activity.getWindow().getDecorView();
                int flags = View.SYSTEM_UI_FLAG_VISIBLE;
                decorView.setSystemUiVisibility(flags);
            }
        });
    }
}
