# Better YouTube Theatre

Makes YouTube's theatre mode fill the entire browser window, like Twitch.

- The video takes the full window height
- The header hides until you scroll down or press `/` to search
- Live chat stays docked on the right at full height

## Install

1. Clone this repository
2. Open `chrome://extensions` and enable **Developer mode**
3. Click **Load unpacked** and select the repository folder

## Usage

Use theatre mode as usual: press `t` or click the theatre button in the player.

## How it works

`content.js` adds a `byt-theatre` class to `<html>` while a video is in theatre mode, and `theatre.css` handles the layout.

## License

MIT
