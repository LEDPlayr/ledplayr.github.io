<svelte:head>
  <title>LEDPlayr: Roadmap</title>
</svelte:head>

<h2>(Somewhat) Planned Features</h2>

<p>
  Most of what I need is included. Below is a list of what I may include if I find time / have
  the need for it.
</p>

<ul>
  <li>Docker images</li>
  <li>
    Display of logs in the WebUI
    <ul>
      <li>Coupled with better error handling</li>
    </ul>
  </li>
  <li>Ability to test models</li>
  <li>Webcam streaming to the UI to make testing LED placement easier</li>
  <li>
    Ability to view a sequence in the Web browser on the 3D Display
    <ul>
      <li>I have no real need for this but it sounds fun and cool</li>
    </ul>
  </li>
</ul>

<h2>Unplanned Features</h2>

<ul>
  <li>
    Built-in sequences and patterns
    <ul>
      <li>
        I use xLights for sequencing or WLED does a decent job of timed pre-planned sequencing
      </li>
    </ul>
  </li>
  <li>Playing of media</li>
</ul>

<h2>Known Issues</h2>

<ul>
  <li>
    Uploading via xLights can result in a sequence that has one less node than intended
    <ul>
      <li>This only happens when uploading sequences at the same time as outputs</li>
      <li>
        It is advisable to untick all sequences and select "All" in the "UDP Out" column to
        upload outputs
      </li>
      <li>
        After initial output upload select "None" in the "UDP Out" column and tick sequences
      </li>
      <li>This issue is being actively investigated</li>
    </ul>
  </li>
</ul>
