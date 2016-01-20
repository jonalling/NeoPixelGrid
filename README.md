# NeoPixelGrid
A helper page to graphically draw pixel images, and generate a copy-able matrix to paste into an Arduino Sketch.

![alt tag](https://github.com/jonalling/NeoPixelGrid/blob/master/Screen%20Shot%202016-01-18%20at%203.21.03%20PM.png)

```
#include <Adafruit_GFX.h>
#include <Adafruit_NeoMatrix.h>
#include <Adafruit_NeoPixel.h>

#define PIN 1

Adafruit_NeoMatrix matrix = Adafruit_NeoMatrix(8, 8, PIN,
  NEO_MATRIX_TOP     + NEO_MATRIX_LEFT +
  NEO_MATRIX_ROWS + NEO_MATRIX_PROGRESSIVE,
  NEO_GRB            + NEO_KHZ800);

void setup() {

  matrix.begin();
  matrix.setTextWrap(false);
  matrix.setBrightness(40);

}

void loop() {

  MatrixHi(matrix.Color(0,255,0));

}

void MatrixHi(uint32_t color) {

  int pixelMatrix[8][8] = {  
  { 0, 0, 0, 0, 0, 0, 0, 0 },  
  { 0, 1, 0, 0, 0, 1, 0, 0 }, 
  { 0, 1, 0, 0, 0, 0, 0, 0 }, 
  { 0, 1, 1, 1, 0, 1, 0, 0 }, 
  { 0, 1, 0, 1, 0, 1, 0, 0 }, 
  { 0, 1, 0, 1, 0, 1, 0, 0 }, 
  { 0, 0, 0, 0, 0, 0, 0, 0 }, 
  { 0, 0, 0, 0, 0, 0, 0, 0 }
  };
   
  for(int row = 0; row < 8; row++) {
    for(int column = 0; column < 8; column++) {
     if(pixelMatrix[row][column] == 1) {
       matrix.drawPixel(column, row, color);
     }
   }
  }
  
  matrix.show();
}

```


