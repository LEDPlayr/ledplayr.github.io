<svelte:head>
  <title>LEDPlayr: Getting Started</title>
</svelte:head>

<p>
  Create the required configuration files and directories. None of the directories have fixed
  values but below are recommended paths and a sample systemd unit file.
</p>

<h2>Download</h2>
<p>
  Download the pre-built binary from Github releases. Currently available builds for x86_64 and
  aarch64. Save the file to /usr/local/bin/ledplayr and make it executable.
</p>

<h2>Configuration</h2>
<code>/usr/local/etc/ledplayr.toml</code>

<pre>
database_url = "/usr/local/share/ledplayr/db.sqlite" # Required
storage = "/usr/local/share/ledplayr/storage" # Required
multicast = true # Optional, defaults to true

[scheduler]
auto_start = true # Optional, defaults to true

[web]
bind = "0.0.0.0" # Optional, defaults to "0.0.0.0"
port = 80 # Optional, defaults to 3000

[log] # Optional, defaults to no file logging
directory = "/usr/local/share/ledplayr/storage" # Required
prefix = "ledplay." # Optionsl, defaults to ""
period = "hour" # Optional, log rotate period - defaults to never
                # options are "minute", "hour", "day", "never"
max_files = 3 # Optional, default is unlimited</pre>

<h2 class="text-lg">Systemd</h2>
<code>/etc/default/ledplayr</code>

<pre>
CONFIG=/usr/local/etc/ledplayr.toml
RUST_LOG=info</pre>

<code>/usr/lib/systemd/system/ledplayr.service</code>

<pre>
[Unit]
Description=LEDplayr - Christmas light sequencer
After=network.target

[Service]
EnvironmentFile=-/etc/default/ledplayr
ExecStart=/usr/local/bin/ledplayr
KillMode=process
Restart=on-failure
RestartPreventExitStatus=255

[Install]
WantedBy=multi-user.target
You can then start ledplayr</pre>

<pre>
sudo systemctl daemon-reload
sudo systemctl enable ledplayr
sudo systemctl start ledplayr</pre>
