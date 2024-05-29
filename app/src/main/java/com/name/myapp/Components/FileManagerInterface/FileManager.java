package com.ecorpcompanygroup.friendzone;

import android.content.Context;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Base64;

public class FileManager {
    private Context context;

    public FileManager(Context context) {
        this.context = context;
    }

    public String readFile(String filePath) {
        String base64Data = "";
        try {
            File file = new File(filePath);
            byte[] fileData = new byte[(int) file.length()];
            FileInputStream fileInputStream = new FileInputStream(file);
            fileInputStream.read(fileData);
            fileInputStream.close();
            base64Data = Base64.getEncoder().encodeToString(fileData);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return base64Data;
    }
}