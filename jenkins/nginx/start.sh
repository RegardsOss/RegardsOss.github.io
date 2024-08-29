#!/usr/bin/env bash
set -e

# Launch NGinx
echo "Launching nginx..."
exec nginx -g 'daemon off;'
