#!/bin/bash

# Uninstall app using ADB
adb uninstall com.wdiodemoapp | true

# Install APK using ADB
adb install apk/test-demo.apk | true

# Run Maestro test with HTML output format
maestro test main.yaml --format html