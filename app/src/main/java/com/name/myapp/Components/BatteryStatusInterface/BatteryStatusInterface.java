package com.advance_native;

import android.content.Context;
import android.webkit.JavascriptInterface;
import android.os.BatteryManager;
import android.os.Build;
import android.content.Intent;
import android.content.IntentFilter;

public class BatteryStatusInterface {
    private Context context;

    public BatteryStatusInterface(Context context) {
        this.context = context;
    }

    @JavascriptInterface
    public int getBatteryLevel() {
        int batteryLevel = -1;

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            BatteryManager batteryManager = (BatteryManager) context.getSystemService(Context.BATTERY_SERVICE);
            batteryLevel = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
        } else {
            IntentFilter intentFilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
            Intent batteryIntent = context.registerReceiver(null, intentFilter);
            int level = batteryIntent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
            int scale = batteryIntent.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
            if (level != -1 && scale != -1) {
                batteryLevel = (int) ((level / (float) scale) * 100);
            }
        }

        return batteryLevel;
    }
}
