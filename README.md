# Metronome

This is an attempt to build a simple, web-based sequencer-style metronome.

I used to use a novation circuit as a metronome for drum practice, since I liked the way I could use the sequencer to highlight certain subdivisions. The circuit was way overkill for this though - I just need a basic webapp that lets me program two sounds to play at different points in a regular cycle.

## What it'll do

Have three boxes for user input - Beats-per-minute (BPM), steps-per-beat (for setting subdivisions), and total steps. When total steps has been entered, a grid of checkboxes will spawn for two sequencer tracks. Pressing play will loop through the boxes, playing the appropriate sound if the box is checked for that step, with a pause before proceeding to the next step. The length of the pause is determined by BPM/SPB.

It's only just started, so very little is currently implemented. I'd host it on my tilde, if I had one.
