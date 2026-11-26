plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android { compileOptions {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

kotlinOptions {
    jvmTarget = "17"
}
    namespace = "com.threedotgraphics.app"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.threedotgraphics.app"
        minSdk = 24
        targetSdk = 35
        versionCode = 1
        versionName = "1.0.0"
    }
}

dependencies {
    implementation("androidx.webkit:webkit:1.12.1")
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("androidx.core:core:1.15.0")
}
