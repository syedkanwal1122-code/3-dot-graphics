# 3 Dot Graphics — Android project

یہ Android Studio project ہے۔ اس environment میں Android SDK/Gradle build tool موجود نہیں، اس لیے یہاں signed یا debug APK compile نہیں ہو سکی۔ یہ source project APK build کرنے کے لیے تیار کیا گیا ہے۔ Android native share sheet کے ذریعے invoice PDF share کرنے کی سہولت بھی شامل ہے۔

## APK بنانے کا طریقہ
1. PC پر Android Studio (Giraffe یا newer) اور Android SDK Platform 35 نصب کریں۔
2. Android Studio میں یہ `3_Dot_Graphics_Android` folder کھولیں۔
3. Gradle Sync مکمل ہونے دیں۔
4. Build > Build Bundle(s) / APK(s) > Build APK(s) منتخب کریں۔
5. APK عموماً `app/build/outputs/apk/debug/app-debug.apk` میں ملے گی۔

## ڈیٹا کی مطابقت
- موجودہ web app کا IndexedDB database name `flexpro-local` اور version `1` برقرار ہے۔
- APK کا WebView ایک مستقل HTTPS app-assets origin استعمال کرتا ہے تاکہ app updates کے دوران اسی app installation کا local database برقرار رہے۔
- Chrome/Windows browser کا database الگ origin/device storage ہے؛ وہ خودکار طور پر APK میں ظاہر نہیں ہوگا۔ پرانے records منتقل کرنے کے لیے موجودہ Settings میں encrypted `.flexpro` backup بنائیں اور APK میں Restore encrypted backup استعمال کریں۔
- پرانے backups کا format/version تبدیل نہیں کیا گیا۔
- ہر Android device کا اپنا local database ہوگا؛ live cloud sync شامل نہیں۔

## نوٹ
یہ project APK source ہے، compiled APK نہیں۔ پہلی بار Android Studio Gradle dependencies download کرے گا۔ Android WebView version کے مطابق کچھ device-specific testing ضروری ہے۔

## Build APK without installing Android Studio on your PC (phone-only route)

1. Create a GitHub account if you do not already have one.
2. Create a new repository and upload the contents of this project ZIP (keep the `.github/workflows/build-apk.yml` file and folder structure).
3. Open the repository's Actions tab and run **Build 3 Dot Graphics APK** (or wait for the first push build).
4. When the run finishes successfully, open its Artifacts section and download `3-Dot-Graphics-Android-APK`.
5. Extract the downloaded artifact on your Android phone, tap `app-debug.apk`, and allow installation from that source if Android asks.

The APK is a debug build for personal installation/testing. It is not Play Store signed. Do not uninstall an installed app if you need its local database; use the in-app encrypted backup first.
