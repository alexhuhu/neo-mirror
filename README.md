# Neo Mirror

A coordinate mirror for Minecraft parkour one-jumps. Converts a left-handed strat to a right-handed one (or vice versa) while preserving exact decimal positions.

## Download

Grab the latest installer from the [Releases](../../releases) page.

- **Windows:** `NeoMirror-Setup.exe` — double-click to install. Adds a Start Menu entry and desktop shortcut.
- **Mac / Linux:** zip archive containing the runnable app.

## How it works

You give it the player position, yaw, and the integer-coord block the jump is anchored to (the "momentum block"). It reflects the lateral offset and yaw across the jump axis (Z for N/S jumps, X for E/W jumps), then outputs the mirrored coords plus a `/tp` command you can paste into chat.

For Z-jumps only the X coord of the momentum block matters; for X-jumps only Z. Y and pitch always pass through unchanged.

## Limitations

This is a pure geometric mirror. Most jumps work cleanly, but some need slightly different coords on each side because of Minecraft's stepping and block-collision quirks. If you enter the jump and still collide with a block during momentum, you'll need to set up the mirrored coordinate manually.

## Build from source

Requires [Node.js](https://nodejs.org) (LTS).

```sh
git clone https://github.com/YOUR_USERNAME/neo-mirror.git
cd neo-mirror
npm install
npm start          # run in dev mode
npm run make       # build the installer
```

The installer ends up in `out/make/squirrel.windows/x64/`.

## License

MIT
