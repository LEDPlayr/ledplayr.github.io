<h2>What is supported?</h2>

<ul>
  <li>
    xLights integration
    <ul>
      <li>
        LEDPlayr will appear as a v6 FPP instance allowing model, outputs, and sequence uploads
        straight from xLights
      </li>
      <li>
        LEDPlayr supports the FPP discovery protocol so should be automatically found on your
        network
      </li>
    </ul>
  </li>
  <li>FSEQ files - this the rendered file from xLights</li>
  <li>Playlists with multiple sequences</li>
  <li>
    Schedulingf of sequences
    <ul>
      <li>By date, day of the week, and time period</li>
    </ul>
  </li>
</ul>

<h2>What isn't supported?</h2>

<ul>
  <li>Testing models</li>
  <li>
    Essentially any form of error handling if you mess up your config
    <ul>
      <li>This includes uploading a sequence with the wrong number of nodes</li>
    </ul>
  </li>
  <li>
    Playing of media
    <ul>
      <li>Uploads from xLights will be accepted but there is no facility to play media</li>
    </ul>
  </li>
</ul>

<h2>But FPP exists!</h2>

<p>
  It does and it has a LOT more features. LEDPlayr was born out of my frustration downloading a
  near 800MB docker image onto a storage and memory constrained RaspberryPi 3B and also my
  desire to learn rust. Those may not be particularly good reasons but we are where we are and I
  learnt a lot along the way 😀 Hopefully someone else find use in my efforts.
</p>
