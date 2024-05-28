package com.socilite;

import android.content.Context;
import android.webkit.JavascriptInterface;
import android.annotation.SuppressLint;

public class WebAppInterface {
    private VibrationInterface vibrationInterface;
    private NotificationInterface notificationInterface;
    private NavigationBarHider navigationBarHider;
    private NavigationBarShower navigationBarShower;
    private ContactsInterface contactsInterface;
    private NetworkManager networkManager;
    private BatteryStatusInterface batteryStatusInterface;
    private FileManager fileManager; 
    private Context context;

    public WebAppInterface(Context context) {
        this.context = context;
        vibrationInterface = new VibrationInterface(context);
        notificationInterface = new NotificationInterface(context);
        navigationBarHider = new NavigationBarHider((MainActivity) context);
        navigationBarShower = new NavigationBarShower((MainActivity) context);
        contactsInterface = new ContactsInterface(context);
        networkManager = new NetworkManager(context);
        batteryStatusInterface = new BatteryStatusInterface(context);
        fileManager = new FileManager(context); 
    }

    @JavascriptInterface
    public void vibrate(long milliseconds) {
        vibrationInterface.vibrate(milliseconds);
    }

    @JavascriptInterface
    public void showNotification(String title, String message) {
        notificationInterface.showNotification(title, message);
    }

    @JavascriptInterface
    public void hideNavigationBar() {
        navigationBarHider.hideNavigationBar();
    }

    @JavascriptInterface
    public void showNavigationBar() {
        navigationBarShower.showNavigationBar();
    }

    @JavascriptInterface
    public String getContacts() {
        return contactsInterface.getContacts();
    }

    @JavascriptInterface
    public boolean isNetworkAvailable() {
        return networkManager.isNetworkAvailable();
    }

    @JavascriptInterface
    public int getBatteryLevel() {
        return batteryStatusInterface.getBatteryLevel();
    }

    @JavascriptInterface
    public String readFile(String filePath) {
        return fileManager.readFile(filePath);
    }
}
