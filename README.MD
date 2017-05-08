ImageResizer
============

A simple image resizing script that uses HTML5 canvas to resize.

## About

I needed a simple way to resize images client-side that were taken with a phone, because native phone images tend to be very large and would take too long to upload over a mobile connection.

## Problems

Resizing with the canvas is not ideal, but it is simple. The script resizes in steps because canvas resizing can introduce aliasing. It can be painfully slow for very large images.

## Usage

Give it an image and the script will return the newly resized image.

#### Parameters

img: The image object.

quality: The jpeg quality of the resized image. Default is 0.85.

targetSize: the largest size in bytes of the resized image.

stepSize: The resizing step size. Default is 0.8, which means that on every pass the image is scaled to 0.8x its original size. Between 0.5 and 0.9 is best. Any lower than 0.5 and you may introduce aliasing.
