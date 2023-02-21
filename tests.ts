{
    // Drive 100 ms forward
    bitbaot.motor(BBMotor.All, 1023);
    basic.pause(100);

    // Drive 100 ms reverse
    bitbaot.motor(BBMotor.All, -1023);
    basic.pause(100);

    // Drive 100 ms forward on left and reverse on right
    bitbaot.motor(BBMotor.Left, 1023);
    bitbaot.motor(BBMotor.Right, -1023);
    basic.pause(100);

    // Buzz for 100 ms
    bitbaot.buzz(1);
    basic.pause(100);
    bitbaot.buzz(0);

    // Read left and right line sensor
    basic.showNumber(bitbaot.readLine(BBLineSensor.Left));
    basic.showNumber(bitbaot.readLine(BBLineSensor.Right));

    // Read left and right light sensor
    basic.showNumber(bitbaot.readLight(BBLightSensor.Left));
    basic.showNumber(bitbaot.readLight(BBLightSensor.Right));

    // Read sonar values
    basic.showNumber(bitbaot.sonar(BBPingUnit.MicroSeconds));
    basic.showNumber(bitbaot.sonar(BBPingUnit.Centimeters));
    basic.showNumber(bitbaot.sonar(BBPingUnit.Inches));

    // Show all leds
    bitbaot.neoSetColor(neopixel.colors(NeoPixelColors.Red));
    bitbaot.neoShow();

    // Clear all leds
    bitbaot.neoClear();
    bitbaot.neoShow();

    // Show led at position 1
    bitbaot.neoSetPixelColor(0, neopixel.colors(NeoPixelColors.Red));
    bitbaot.neoShow();

    // Show led rainbow
    bitbaot.neoRainbow();
    bitbaot.neoShow();

    // Show led rainbow and shift
    bitbaot.neoRainbow();
    bitbaot.neoShift();
    bitbaot.neoShow();

    // Show led rainbow and rotate
    bitbaot.neoRainbow();
    bitbaot.neoRotate();
    bitbaot.neoShow();

    // Set brightness of leds
    bitbaot.neoBrightness(100);
    bitbaot.neoShow();

    // Use neo() variable
    bitbaot.neo().clear();
    bitbaot.neo().show();
}
