#!/bin/bash

# Define the report directory
REPORT_DIR="reports"
HTML_DIR="$REPORT_DIR/HTMLReport"

# Check if the report directory exists
rm -rf "$REPORT_DIR"/*
echo "Creating $HTML_DIR directory..."
mkdir -p "$HTML_DIR"

echo "Run JMeter Commands"

jmeter -n -t JMeter-file/RegressAPI-load-test.jmx -l reports/result.jtl -e -o "$HTML_DIR"  

echo "JMeter Commands executed successfully"
