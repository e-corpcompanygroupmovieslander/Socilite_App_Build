package com.ecorpcompanygroup.friendzone;

import android.Manifest;
import android.app.Activity;
import android.content.ContentResolver;
import android.content.Context;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.provider.ContactsContract;
import android.webkit.JavascriptInterface;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ContactsInterface {
    private Context context;
    private static final int PERMISSION_REQUEST_CODE = 123;

    public ContactsInterface(Context context) {
        this.context = context;
    }

    @JavascriptInterface
    public void requestContactsPermission() {
        if (ContextCompat.checkSelfPermission(context, Manifest.permission.READ_CONTACTS)
                != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions((Activity) context,
                    new String[]{Manifest.permission.READ_CONTACTS}, PERMISSION_REQUEST_CODE);
        } else {
            fetchContacts();
        }
    }

    @JavascriptInterface
    public String getContacts() {
        if (ContextCompat.checkSelfPermission(context, Manifest.permission.READ_CONTACTS)
                != PackageManager.PERMISSION_GRANTED) {
            requestContactsPermission();
            return new JSONArray().toString();
        } else {
            return fetchContacts();
        }
    }

    private String fetchContacts() {
        JSONArray jsonArray = new JSONArray();
        ContentResolver contentResolver = context.getContentResolver();
        Cursor cursor = contentResolver.query(ContactsContract.Contacts.CONTENT_URI, null, null, null, null);
        if (cursor != null && cursor.moveToFirst()) {
            try {
                String idColumn = ContactsContract.Contacts._ID;
                String nameColumn = ContactsContract.Contacts.DISPLAY_NAME;
                int idIndex = cursor.getColumnIndex(idColumn);
                int nameIndex = cursor.getColumnIndex(nameColumn);
                do {
                    JSONObject jsonObject = new JSONObject();
                    String id = cursor.getString(idIndex);
                    String name = cursor.getString(nameIndex);
                    jsonObject.put("id", id);
                    jsonObject.put("name", name);

                    Cursor phoneCursor = contentResolver.query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null,
                            ContactsContract.CommonDataKinds.Phone.CONTACT_ID + " = ?", new String[]{id}, null);
                    JSONArray phoneNumbers = new JSONArray();
                    if (phoneCursor != null && phoneCursor.moveToFirst()) {
                        int phoneNumberIndex = phoneCursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER);
                        do {
                            String phoneNumber = phoneCursor.getString(phoneNumberIndex);
                            phoneNumbers.put(phoneNumber);
                        } while (phoneCursor.moveToNext());
                        phoneCursor.close();
                    }
                    jsonObject.put("phoneNumbers", phoneNumbers);
                    jsonArray.put(jsonObject);
                } while (cursor.moveToNext());
            } catch (JSONException e) {
                e.printStackTrace();
            } finally {
                cursor.close();
            }
        }
        return jsonArray.toString();
    }
}
