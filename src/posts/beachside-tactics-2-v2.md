---
title: "Beachside Tactics Alpha (v2)"
date: 2026-10-09
category: "Changelog"
---

<iframe frameborder="0" src="https://itch.io/embed/5080837" width="552" height="167"><a href="https://minota.itch.io/beachside-tactics">Beachside Tactics Alpha by Minota</a></iframe>

- Added settings for water animation speed, simplified water, text speed, and Discord Rich Presence.
- Client settings are now stored in settings.cfg.
- Added accounts and cloud saving. Save data is now stored on Passports. A new service created for storing Beachside Tactics' player data.
- Old clients are now rejected automatically.
- Added a tutorial.
- Added a wardrobe and cosmetics. Few are available at this time.
- Added chat bubbles above players' heads.
- Added a Discord button to the main menu.
- Lowered base stamina to leave room for shop upgrades from Simon.
- The first swim from Simon is now free.
- Fishing rods are now equipped automatically when they have more rod power than the current one.
- Fish far below your fishing power now appear less often, so higher-value fish are offered more.
- The Bamboo Rod can now be used with bait.
- Fishing minigames that take too long now fail automatically.
- Chat can now be opened while fishing, and it closes when a fish is on the line.
- Removed the delay between the end of NPC dialogue and the menu opening.
- Added a short cooldown after a menu opens, so it cannot be closed immediately by accident.
- Improved logging, including the player's username in log entries.
- Added more drops to the swimming minigame.
- Simon now offers a shop in which you can purchase upgrades to improve the swimming minigame.
- Tweaked prices of swimming minigame.

## The following changes have been made after testing
- Centered speech bubbles better so they appear centered on the player.
- Shortened the timeout on the network.
- Hopefully kicked the player in some places where they're not kicked.
- The overworld music now loops.
- You can press E or Left Mouse Button to skip immersive dialogue.
- Legacy save importing has been properly added.
- The main menu also swaps the water based on the player's settings.
- You can't ratelimit & sign yourself out by spamming the Settings menu.
- Fixed the Discord RPC plugin adding itself in builds of the game that can't support it.
- Fixed the level not removing itself properly (like leaving to the Main Menu). 
- Certain UI elements don't overlap.
- The player's fishing speech bubbles don't stay in place.
- The player can open the chat while fishing (with a bobber out) again.
- Added the Shipwright NPC, Noah, who'll tell the player about there being different islands with a hint for the future.
- Added an alert on Shelly if you have unredeemed bestiary rewards.
- The Pearl is now a Junk and not a Fish.
- Sheldon's dialogue directly mentions Shelly in his introduction dialogue.
- Tweaked prices for the swimming items so swimming is more worth it.
- Empty vendors shouldn't have an empty bait category.
- Prevent repeat too tired notifications when swimming.
- Fixed a busted upgrade with Simon causing the player to be unable to swim.
- Improved the dialogue with Simon to make it more personable.
- Simon won't let the player open the shop if the player is too underleveled.